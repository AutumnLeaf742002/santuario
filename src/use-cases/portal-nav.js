const navBtn = document.querySelector('.nav__collapse__btn');

navBtn.addEventListener('click', () => {
    const nav = document.querySelector('.nav__container');
    const colapsed = nav.getAttribute('data-collapsed');

    if (colapsed === 'true') {
        nav.setAttribute('data-collapsed', 'false');
    } else {
        nav.setAttribute('data-collapsed', 'true');
    }
});