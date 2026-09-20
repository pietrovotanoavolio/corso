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

  var home = el("a", "btn", "&#8962; Menu");
  home.href = "index.html";
  home.title = "Torna al menu delle lezioni (Esc dalla panoramica)";
  var ovBtn = el("button", "btn", "Panoramica <kbd>O</kbd>");
  ovBtn.type = "button";
  var topR = el("div", "top-r");
  if (track.getAttribute("data-glossario")) {
    var g = el("a", "btn", "Glossario");
    g.href = "glossario.html";
    topR.appendChild(g);
  }
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

  var start = parseInt((location.hash || "").replace("#", ""), 10);
  go(isNaN(start) ? 0 : start - 1);
})();
