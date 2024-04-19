const $emailInput = document.querySelector('#email');
const $passInput = document.querySelector('#password');

const $loginBtn = document.querySelector('.form__btn');

$loginBtn.addEventListener('click', () => {
    const email = $emailInput.value;
    const password = $passInput.value;
    
    if (email === 'warren@gmail.com' && password === '123') {
        window.location.href = '/src/view/request.html';
    } else {
        alert('Login failed');
    }   

    $emailInput.value = '';
    $passInput.value = '';
});