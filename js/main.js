'use strict';
//Show/hide notification panel
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



//Show/hide options panels
const options = () => {
    const options = document.querySelectorAll('.options');
    const table = document.querySelector('#table');
    const ths = document.querySelectorAll('.th');

    /* table.addEventListener('click', toggleOption); */

   for (let i = 0; i < ths.length; i++) {
       ths[i].addEventListener('click', toggleOption); 
   }

   function toggleOption(event) {
       if (window.innerWidth > 1068) {
           if (event.target === ths[0]) {
               options[0].classList.toggle('showOptions');
           } else if (event.target === ths[1]) {
               options[1].classList.toggle('showOptions')
           } else if (event.target === ths[2]) {
               options[2].classList.toggle('showOptions')
           } else if (event.target === ths[3]) {
               options[3].classList.toggle('showOptions')
           } else if (event.target === ths[4]) {
               options[4].classList.toggle('showOptions')
           } else if (event.target === ths[5]) {
               options[5].classList.toggle('showOptions')
           } else if (event.target === ths[7]) {
               options[6].classList.toggle('showOptions')
           } else {
               return;
           }
       } else {
           console.log('test');
       }
   };
};


notification();
options();

window.addEventListener('resize', notification);