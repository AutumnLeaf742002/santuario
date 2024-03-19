const navMenuBtn = document.querySelector('#navMenuBtn');

const nav = document.querySelector('.landing__header');

const body = document.querySelector('body');

const overlay = document.querySelector('.overlay');

navMenuBtn.addEventListener('click', () => {
    const isExpanded = nav.getAttribute('expanded');

    if(isExpanded === 'false') {
        nav.setAttribute('expanded', true);
        navMenuBtn.innerText = 'close';
        body.classList.add('no-scroll');
        overlay.removeAttribute('hidden');

        overlay.addEventListener('click', () => {
            nav.setAttribute('expanded', false);
            navMenuBtn.innerText = 'menu';
            body.classList.remove('no-scroll');
            overlay.setAttribute('hidden', true);
        })

    } else if(isExpanded === 'true') {
        nav.setAttribute('expanded', false);
        navMenuBtn.innerText = 'menu';
        body.classList.remove('no-scroll');
        overlay.setAttribute('hidden', true);
    }
})

const menuItems = document.querySelectorAll('.nav__list .nav__item a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.setAttribute('expanded', false);
        navMenuBtn.innerText = 'menu';
        body.classList.remove('no-scroll');
        overlay.setAttribute('hidden', true);
    })
});