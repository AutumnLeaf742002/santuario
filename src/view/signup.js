const $nameInput = document.querySelector('#name');
const $lastNameInput = document.querySelector('#lastName');
const $emailInput = document.querySelector('#email');
const $passInput = document.querySelector('#password');
const $passConfirmInput = document.querySelector('#passwordConfirm');

const $nameMessage = $nameInput.nextElementSibling;
const $lastNameMessage = $lastNameInput.nextElementSibling;
const $emailMessage = $emailInput.nextElementSibling;
const $passMessage = $passInput.nextElementSibling;
const $passConfirmMessage = $passConfirmInput.nextElementSibling;

const $signupBtn = document.querySelector('.form__btn');

const baseURL = 'http://localhost:8080/';

if (sessionStorage.getItem('user')) {
    window.location.href = '/src/view/request.html';
}

$signupBtn.addEventListener('click', async () => {

    $nameMessage.textContent = '';
    $lastNameMessage.textContent = '';
    $emailMessage.textContent = '';
    $passMessage.textContent = '';
    $passConfirmMessage.textContent = '';

    const name = $nameInput.value;
    const lastName = $lastNameInput.value;
    const email = $emailInput.value;
    const password = $passInput.value;
    const passwordConfirm = $passConfirmInput.value;

    if (!name) {
        $nameMessage.textContent = 'el nombre es requerido';
        return;
    } else if (name.length < 3) {
        $nameMessage.textContent = 'el nombre debe tener al menos 3 caracteres';
        return;
    } else if (name.length > 20) {
        $nameMessage.textContent = 'el nombre no debe ser mayor a 20 caracteres';
        return;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        $nameMessage.textContent = 'el nombre solo debe contener letras';
        return;
    } else {
        $nameMessage.textContent = '';
    }

    if (!lastName) {
        $lastNameMessage.textContent = 'el apellido es requerido';
        return;
    } else if (lastName.length < 3) {
        $lastNameMessage.textContent = 'el apellido debe tener al menos 3 caracteres';
        return;
    } else if (lastName.length > 20) {
        $lastNameMessage.textContent = 'el apellido no debe ser mayor a 20 caracteres';
        return;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
        $lastNameMessage.textContent = 'el apellido solo debe contener letras';
        return;
    } else {
        $lastNameMessage.textContent = '';
    }

    if (!email) {
        $emailMessage.textContent = 'el correo es requerido';
        return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) { // Email validation
        $emailMessage.textContent = 'el correo no es válido';
        return;
    } else {
        $emailMessage.textContent = '';
    }

    if (!password) {
        $passMessage.textContent = 'la contraseña es requerida';
        return;
    } else if (password.length < 8) {
        $passMessage.textContent = 'la contraseña debe tener al menos 8 caracteres';
        return;
    } else if (password.length > 20) {
        $passMessage.textContent = 'la contraseña no debe ser mayor a 20 caracteres';
        return;
    } else {
        $passMessage.textContent = '';
    }

    if (!passwordConfirm) {
        $passConfirmMessage.textContent = 'confirmar contraseña es requerido';
        return;
    } else if (password !== passwordConfirm) {
        $passConfirmMessage.textContent = 'las contraseñas no coinciden';
        return;
    } else {
        $passConfirmMessage.textContent = '';
    }

    const response = await fetch(`${baseURL}users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom_usuario: name,
            ape_usuario: lastName,
            pass_usuario: password,
            email_usuario: email
        })
    });

    if (response.ok) {
        alert('Usuario creado con éxito');
        window.location.href = '/src/view/login.html';
    } else {
        const data = await response.json();
        console.log(data.message);
    }

    $nameInput.value = '';
    $lastNameInput.value = '';
    $emailInput.value = '';
    $passInput.value = '';
    $passConfirmInput.value = '';
});