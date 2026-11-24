// 프로젝트 카테고리 필터(main.js랑 다른 이유: 변수 이름이 같으면 main.js와 같이 불러올 때 오류가 나서 이 파일이 실행되지 않음)
const galleryFilters = document.querySelectorAll('[data-filter]');
const galleryCards = document.querySelectorAll('[data-category]');

galleryFilters.forEach(button => {
  button.addEventListener('click', () => {
    galleryFilters.forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });

    galleryCards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all'
        && card.dataset.category !== button.dataset.filter;
    });
  });
});
