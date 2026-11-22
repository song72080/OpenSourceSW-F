'use strict';
const filterButtons = document.querySelectorAll('.filter');
const timelineItems = document.querySelectorAll('.timeline-item');
const filterMessage = document.getElementById('filter-message');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle('is-active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    timelineItems.forEach(item => {
      const show = selected === 'all' || item.dataset.category === selected;
      item.hidden = !show;
      if (show) count++;
    });
    filterMessage.textContent = `${count}개의 활동 기록이 표시되었습니다.`;
  });
});
