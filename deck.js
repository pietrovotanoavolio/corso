/* Navigazione orizzontale delle slide: pulsanti, tastiera, swipe, panoramica. */
(function () {
  var track = document.getElementById("deck");
  if (!track) return;

  var lesson = track.getAttribute("data-lesson") || "";
  var slides = Array.prototype.slice.call(track.children);
  var total = slides.length;
  var cur = 0;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  /* struttura: barra in alto, area slide, footer */
  var app = el("div", "app");
  var top = el("header", "top");
  var viewport = el("div", "viewport");
  var foot = el("footer", "foot");

  /* l'anteprima (?anteprima sul menu) resta attiva finché la scheda è aperta */
  var anteprima = /[?&]anteprima/.test(location.search);
  try {
    if (anteprima) sessionStorage.setItem("anteprima", "1");
    else anteprima = sessionStorage.getItem("anteprima") === "1";
  } catch (e) {}
  var qs = anteprima ? "?anteprima" : "";

  var home = el("a", "btn", "&#8962; Menu");
  home.href = "index.html" + qs;
  home.title = "Torna al menu delle lezioni (Esc dalla panoramica)";
  var ovBtn = el("button", "btn", "Panoramica <kbd>O</kbd>");
  ovBtn.type = "button";
  var topR = el("div", "top-r");
  var g = el("a", "btn", "Glossario");
  g.href = "glossario.html";
  topR.appendChild(g);
  topR.appendChild(ovBtn);
  top.appendChild(home);
  top.appendChild(topR);

  var prev = el("button", "nav", "&#8592;");
  prev.type = "button"; prev.setAttribute("aria-label", "Slide precedente");
  var next = el("button", "nav", "&#8594;");
  next.type = "button"; next.setAttribute("aria-label", "Slide successiva");
  var counter = el("span", "count");
  counter.setAttribute("aria-live", "polite");

  var fl = el("span", "f-l", "Pietro Votano Avolio");
  var fc = el("div", "f-c");
  fc.appendChild(prev); fc.appendChild(counter); fc.appendChild(next);
  var fr = el("span", "f-r", "AI e Metodo di Studio");
  foot.appendChild(fl); foot.appendChild(fc); foot.appendChild(fr);

  track.parentNode.insertBefore(app, track);
  viewport.appendChild(track);
  app.appendChild(top); app.appendChild(viewport); app.appendChild(foot);

  /* panoramica */
  var ov = el("div", "ov");
  ov.hidden = true;
  ov.setAttribute("role", "dialog");
  ov.setAttribute("aria-label", "Panoramica delle slide");
  var ovGrid = el("div", "ov-grid");
  var ovHead = el("div", "ov-head", "<strong>Lezione " + lesson + " · panoramica</strong>");
  var ovClose = el("button", "btn", "Chiudi <kbd>Esc</kbd>");
  ovClose.type = "button";
  ovHead.appendChild(ovClose);
  ov.appendChild(ovHead); ov.appendChild(ovGrid);
  app.appendChild(ov);

  slides.forEach(function (s, i) {
    var h = s.querySelector("h1,h2");
    var b = el("button", "ov-item");
    b.type = "button";
    b.innerHTML = "<span>" + (i + 1) + "</span>" + (h ? h.textContent : "Slide " + (i + 1));
    b.addEventListener("click", function () { closeOv(); go(i); });
    ovGrid.appendChild(b);
  });

  function openOv() {
    ov.hidden = false;
    var items = ovGrid.children;
    for (var k = 0; k < items.length; k++) items[k].classList.toggle("on", k === cur);
    if (items[cur]) items[cur].focus();
  }
  function closeOv() { ov.hidden = true; ovBtn.focus(); }

  function go(i) {
    cur = Math.max(0, Math.min(total - 1, i));
    track.style.transform = "translateX(" + (-cur * 100) + "%)";
    slides.forEach(function (s, k) {
      s.setAttribute("aria-hidden", k === cur ? "false" : "true");
      if (k === cur) s.removeAttribute("inert"); else s.setAttribute("inert", "");
    });
    slides[cur].scrollTop = 0;
    app.classList.toggle("dark", slides[cur].classList.contains("dark"));
    counter.innerHTML = "Lezione " + lesson + " &middot; <b>" + (cur + 1) + "</b> / " + total;
    prev.disabled = cur === 0;
    next.disabled = cur === total - 1;
    try { history.replaceState(null, "", "#" + (cur + 1)); } catch (e) {}
    /* ricorda dove eri, per tornare dal glossario */
    try { sessionStorage.setItem("posizione", JSON.stringify({ l: lesson, s: cur + 1 })); } catch (e) {}
  }

  prev.addEventListener("click", function () { go(cur - 1); });
  next.addEventListener("click", function () { go(cur + 1); });
  ovBtn.addEventListener("click", openOv);
  ovClose.addEventListener("click", closeOv);

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target && e.target.tagName;
    if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT") return;
    var k = e.key;
    if (!ov.hidden) {
      if (k === "Escape" || k === "o" || k === "O") { e.preventDefault(); closeOv(); }
      return;
    }
    if (k === "ArrowRight" || k === "PageDown" || (k === " " && !e.shiftKey)) { e.preventDefault(); go(cur + 1); }
    else if (k === "ArrowLeft" || k === "PageUp" || (k === " " && e.shiftKey)) { e.preventDefault(); go(cur - 1); }
    else if (k === "Home") { e.preventDefault(); go(0); }
    else if (k === "End") { e.preventDefault(); go(total - 1); }
    else if (k === "o" || k === "O") { e.preventDefault(); openOv(); }
  });

  /* swipe su touch */
  var sx = null, sy = null;
  viewport.addEventListener("touchstart", function (e) {
    sx = e.touches[0].clientX; sy = e.touches[0].clientY;
  }, { passive: true });
  viewport.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* autovalutazione: domande a scelta multipla con feedback e risultato finale */
  var quizSlides = slides.filter(function (s) { return s.classList.contains("quiz"); });
  var resSlides = slides.filter(function (s) { return s.classList.contains("quiz-result"); });

  function updateResult() {
    var n = quizSlides.length, ok = 0, done = 0, wrong = [];
    quizSlides.forEach(function (s, i) {
      var d = s.getAttribute("data-done");
      if (d) done++;
      if (d === "ok") ok++;
      if (d === "no") wrong.push(i + 1);
    });
    resSlides.forEach(function (r) {
      r.querySelector(".qr-score").textContent = "Risposte esatte: " + ok + " su " + n;
      var msg;
      if (done < n) msg = "Hai risposto a " + done + " domande su " + n + ". Torna indietro per completare l'autovalutazione.";
      else if (ok === n) msg = "Ottimo: hai colto tutti i punti della lezione. Puoi passare alla prossima.";
      else if (ok >= Math.ceil(n * 0.6)) msg = "Buon risultato. Rivedi le slide legate alle domande " + wrong.join(", ") + ".";
      else msg = "Vale la pena rivedere la lezione, in particolare gli argomenti delle domande " + wrong.join(", ") + ".";
      r.querySelector(".qr-msg").textContent = msg;
    });
  }

  function answer(s, btn) {
    if (s.getAttribute("data-done")) return;
    var right = s.getAttribute("data-correct");
    var ok = btn.getAttribute("data-k") === right;
    s.setAttribute("data-done", ok ? "ok" : "no");
    Array.prototype.forEach.call(s.querySelectorAll(".opt"), function (b) {
      b.setAttribute("aria-disabled", "true");
      if (b.getAttribute("data-k") === right) b.classList.add("right");
    });
    if (!ok) btn.classList.add("wrong");
    var fb = s.querySelector(".fb");
    fb.querySelector("strong").textContent = ok ? "Esatto." : "Non è questa: la risposta giusta è la " + right + ".";
    fb.hidden = false;
    updateResult();
  }

  quizSlides.forEach(function (s) {
    Array.prototype.forEach.call(s.querySelectorAll(".opt"), function (b) {
      b.addEventListener("click", function () { answer(s, b); });
    });
  });

  resSlides.forEach(function (r) {
    r.querySelector(".qr-retry").addEventListener("click", function () {
      quizSlides.forEach(function (s) {
        s.removeAttribute("data-done");
        s.querySelector(".fb").hidden = true;
        Array.prototype.forEach.call(s.querySelectorAll(".opt"), function (b) {
          b.classList.remove("right", "wrong");
          b.removeAttribute("aria-disabled");
        });
      });
      updateResult();
      go(slides.indexOf(quizSlides[0]));
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || !ov.hidden) return;
    var s = slides[cur];
    if (!s || !s.classList.contains("quiz")) return;
    var k = e.key.toUpperCase();
    var map = { "1": "A", "2": "B", "3": "C", "4": "D" };
    k = map[k] || k;
    if (k !== "A" && k !== "B" && k !== "C" && k !== "D") return;
    var b = s.querySelector('.opt[data-k="' + k + '"]');
    if (b) { e.preventDefault(); answer(s, b); }
  });

  var start = parseInt((location.hash || "").replace("#", ""), 10);
  if (window.__deckStart) { start = window.__deckStart; window.__deckStart = null; }
  go(isNaN(start) ? 0 : start - 1);
})();
