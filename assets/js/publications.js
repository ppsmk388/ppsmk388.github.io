(() => {
  const list = document.getElementById('paper-list');
  if (!list) return;

  const buttons = document.querySelectorAll('.publication-filter');
  const papers = list.querySelectorAll('li[data-category]');

  function showCategory(category) {
    papers.forEach((paper) => {
      paper.hidden = category !== 'all' && paper.dataset.category !== category;
    });

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => showCategory(button.dataset.filter));
  });

  showCategory('preference-data');
})();
