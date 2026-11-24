'use strict';

const filterGroup = document.querySelector('.activity-filters');
const filterButtons = document.querySelectorAll('.filter');
const timelineItems = document.querySelectorAll('.timeline-item');
const filterMessage = document.getElementById('filter-message');

function applyFilter(selectedButton) {
    const selected = selectedButton.dataset.filter;
    let count = 0;

    filterButtons.forEach(button => {
        const active = button === selectedButton;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    timelineItems.forEach(item => {
        const show = selected === 'all' || item.dataset.category === selected;
        item.hidden = !show;
        if (show) count++;
    });

    filterMessage.textContent = `${count}개의 활동 기록이 표시되었습니다.`;
}

if (filterGroup && filterMessage && filterButtons.length) {
    filterGroup.hidden = false;
    filterButtons.forEach(button => {
        button.addEventListener('click', () => applyFilter(button));
    });
    applyFilter(filterButtons[0]);
}
