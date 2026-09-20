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
