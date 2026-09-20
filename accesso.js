/* Anteprima riservata al docente: si attiva con ?anteprima=CHIAVE (solo l'impronta della chiave è nel codice). */
(function () {
  var HASH = "b75f63f0b8f8007933c2a096070e27a4f440a674dc6d8062283ac5ce8a4a5010";
  function hex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
  }
  window.ANTEPRIMA = new Promise(function (resolve) {
    try { if (sessionStorage.getItem("anteprima") === "1") return resolve(true); } catch (e) {}
    var m = /[?&]anteprima=([^&]+)/.exec(location.search);
    if (!m || !window.crypto || !window.crypto.subtle) return resolve(false);
    window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(decodeURIComponent(m[1]))).then(function (b) {
      var ok = hex(b) === HASH;
      if (ok) { try { sessionStorage.setItem("anteprima", "1"); } catch (e) {} }
      resolve(ok);
    }, function () { resolve(false); });
  });
})();

/* Una lezione è aperta se è in "attive" oppure se è arrivato l'orario in "apertura" (e non è in "bloccate"). */
window.lezioneAperta = function (n) {
  var s = window.STATO || {};
  if ((s.bloccate || []).indexOf(n) !== -1) return false;
  if ((s.attive || []).indexOf(n) !== -1) return true;
  var t = s.apertura && s.apertura[n];
  if (t) { var d = new Date(t); if (!isNaN(d.getTime()) && Date.now() >= d.getTime()) return true; }
  return false;
};
