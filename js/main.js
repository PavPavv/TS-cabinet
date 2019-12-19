'use strict';

const notification = () => {
    const notifyBtn = document.querySelector('.notification');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.closeModal');

    notifyBtn.addEventListener('click',function() {
        modal.classList.add('activeModal');
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('activeModal');
    });
};

notification();