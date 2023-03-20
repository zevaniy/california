$(document).ready(function () {
    $('.slider__items').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 4000
    });

    const btn = document.querySelector('.search__btn');
    const el = $('.search__input');
    const w = el.width();
    let show = false;
    el.width(0).show();

    btn.addEventListener('click', () => {
        if (show){
            el.width(0);
            show = false;
            $('.search__img').attr('src', './images/search.svg');
        } else {
            el.width(w);
            show = true;
            $('.search__img').attr('src', './images/x-symbol.svg');
            $('.search__input-bar').val('');
        }     
    });

    const basketBtn = document.querySelector('.basket__link');
    const user = $('.user');
    const h = user.height();
    let showUser = false;
    user.height(0).show();

    basketBtn.addEventListener('click', () => {
        if (showUser){
            user.height(0);
            showUser = false;
        } else {
            user.height(h);
            showUser = true;
        }     
    });

    const collapsBtn = document.querySelector('.menu__collaps');
    const menu = document.querySelector('.menu');

    collapsBtn.addEventListener('click', () => {
        collapsBtn.classList.toggle('collaps');
        menu.classList.toggle('menu-open');
    });
});