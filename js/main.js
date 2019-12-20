'use strict';

const notification = () => {
    const notifyBtn = document.querySelector('.notification');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.closeModal');
    const wrapper = document.querySelector('.wrapper');
    const windowHeight = document.documentElement.clientHeight;
    const main = document.querySelector('main');
    const mainHeight = main.clientHeight;

    notifyBtn.addEventListener('click',function() {

        if (windowHeight > mainHeight) {
            wrapper.classList.add('fullHeight');
            modal.classList.add('activeModal');
        } else {
            modal.classList.add('activeModal');
        }
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('activeModal');
        wrapper.classList.remove('fullHeight');
    });
};

notification();

window.addEventListener('resize', notification);