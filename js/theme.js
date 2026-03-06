/* ============================================================
   Dark mode toggle — persisted in localStorage
   ============================================================ */
(function () {
  const KEY = "isc1_theme";
  const saved = localStorage.getItem(KEY);
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = next === "dark" ? "☀️" : "🌙";
  };

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      const theme = document.documentElement.getAttribute("data-theme");
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  });
})();
