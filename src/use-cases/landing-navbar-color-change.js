const header = document.querySelector('#landingHeader');

header.setAttribute('style', 'color: var(--light)');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const {isIntersecting} = entry
        if(isIntersecting) {
            const color = entry.target.getAttribute('data-header-color');
            header.setAttribute('style', `color: var(--${color})`);
        }
    });
}, observerOptions)

const sections = document.querySelectorAll('section');

sections.forEach(section => observer.observe(section));