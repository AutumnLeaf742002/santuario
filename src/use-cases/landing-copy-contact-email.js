const copyBtn = document.querySelector('.copy__email__btn');

const copyEmail = document.querySelector('.own__email');

copyEmail.value = "santuario@gmail.com"

copyBtn.addEventListener('click', () => {

    copyBtn.setAttribute('copied', 'true');
    copyBtn.innerText = 'copiado';

    copyEmail.select();
    copyEmail.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyEmail.value);

    setTimeout(() => {
        copyBtn.setAttribute('copied', 'false');
        copyBtn.innerText = 'copiar';
        copyEmail.value = ""
        copyEmail.value = "santuario@gmail.com"
    }, 2000)
});