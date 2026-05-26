/* Research direction tabs (Publications section) */
(function () {
  const tabs = document.querySelectorAll(".research-tab");
  const panels = document.querySelectorAll(".research-panel");
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach((p) => {
        p.classList.toggle("is-active", p.getAttribute("data-panel") === target);
      });
    });
  });
})();
