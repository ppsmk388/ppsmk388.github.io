(function () {
  const researchMap = document.getElementById("research-svg");
  if (!researchMap) return;

  researchMap.addEventListener("load", function () {
    const svg = researchMap.contentDocument && researchMap.contentDocument.querySelector("svg");
    if (!svg || !svg.viewBox || !svg.viewBox.baseVal) return;

    const vb = svg.viewBox.baseVal;
    const cropTop = 0.18;
    const cropBottom = 1 / 6;

    const newY = vb.y + vb.height * cropTop;
    const newHeight = vb.height * (1 - cropTop - cropBottom);

    if (newHeight > 0) {
      svg.setAttribute("viewBox", vb.x + " " + newY + " " + vb.width + " " + newHeight);
    }
  });
})();

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
