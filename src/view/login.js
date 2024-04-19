const $emailInput = document.querySelector('#email');
const $passInput = document.querySelector('#password');

const $emailMessage = $emailInput.nextElementSibling;
const $passMessage = $passInput.nextElementSibling;

const $loginBtn = document.querySelector('.form__btn');

const baseURL = 'http://localhost:8080/';

if(sessionStorage.getItem('user')) {
    window.location.href = '/src/view/request.html';
}

$loginBtn.addEventListener('click', async () => {

    $emailMessage.textContent = '';
    $passMessage.textContent = '';

    const email = $emailInput.value;
    const password = $passInput.value;

    const response = await fetch(`${baseURL}users`);
    const data = await response.json();

    const user = data.find(user => user.email_usuario === email && user.pass_usuario === password);

    if (user) {
        alert('Bienvenido');
        window.location.href = '/src/view/request.html';
        sessionStorage.setItem('user', JSON.stringify(user.id_user));
    } else {
        $emailMessage.textContent = 'correo y/o contraseña incorrectos';
        $passMessage.textContent = 'correo y/o contraseña incorrectos';
    }

    $emailInput.value = '';
    $passInput.value = '';
});