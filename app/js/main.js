(function (){
    const wrapper = document.querySelector('.header__wrapper');
    wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('header__wrapper-activ');
    });
}());

(function (){
    const burger = document.querySelector('.main__menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('main__menu-activ');
    });
}());
