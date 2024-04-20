
const mainFormRequest = document.getElementById('mainFormRequest')
const buttonsFormRequest = document.getElementById('buttonsFormRequest')
const buttonNext = document.getElementById('buttonNext')
const buttonBack = document.getElementById('buttonBack')
const button__create__new__request = document.getElementById('button__create__new__request')

mainFormRequest.style.marginLeft = '0%'
const baseURL = 'http://localhost:8080/';

const getInputValueById = (InputId) => {
    const inputValue = document.getElementById(InputId).value

    return inputValue
}

buttonNext.addEventListener('click', async () => {
    if (parseInt(mainFormRequest.style.marginLeft) >= -200) {
        mainFormRequest.style.marginLeft = `${parseInt(mainFormRequest.style.marginLeft) - 100}%`
    }

    if (parseInt(mainFormRequest.style.marginLeft) < 0) {
        buttonsFormRequest.style.display = 'flex'
    }

    if (parseInt(mainFormRequest.style.marginLeft) === -300) {
        if (buttonNext.textContent === 'Guardar') {
            const name = getInputValueById('name')
            const nameMandated = getInputValueById('name_mandated')
            const birthDate = getInputValueById('birthDate')
            const maritalStatus = getInputValueById('maritalStatus')
            const identityDocument = getInputValueById('identityDocument')
            const lastName = getInputValueById('lastName')
            const gender = getInputValueById('gender')
            const nationality = getInputValueById('nationality')
            const personalPhoneMandated = getInputValueById('personalPhone_mandated')
            const mailMandated = getInputValueById('mail_mandated')
            const jobPhoneMandated = getInputValueById('jobPhone_mandated')
            const lastNameMandated = getInputValueById('lastName_mandated')
            const jobNameMandated = getInputValueById('jobName_mandated')
            const identityDocumentMandated = getInputValueById('identityDocument_mandated')
            const paymentInputCard = getInputValueById('payment__input__card')
            const paymentInputName = getInputValueById('payment__input__name')
            const paymentInputDate = getInputValueById('payment__input__date')
            const paymentCvv = getInputValueById('payment__cvv')

            const namesLocalStorage = localStorage.getItem('names')
            const namesObj = { name, nameMandated, id: Math.floor(Math.random() * 1000000) + 1 }
            if (namesLocalStorage) {
                const arrayNames = JSON.parse(namesLocalStorage)
                const newArrayToSave = [...arrayNames, namesObj]
                localStorage.setItem('names', JSON.stringify(newArrayToSave))
            } else {
                localStorage.setItem('names', JSON.stringify([namesObj]))
            }

            window.location.reload()
            alert('Paciente agregado ✅')
        }

        buttonNext.textContent = 'Guardar'
    }
})

buttonBack.addEventListener('click', () => {
    if (parseInt(mainFormRequest.style.marginLeft) <= -100) {
        mainFormRequest.style.marginLeft = `${parseInt(mainFormRequest.style.marginLeft) + 100}%`
    }

    if (parseInt(mainFormRequest.style.marginLeft) === 0) {
        buttonsFormRequest.style.display = 'none'
    }

    if (parseInt(mainFormRequest.style.marginLeft) !== 300) {
        buttonNext.textContent = 'Siguiente'
    }
})

button__create__new__request.addEventListener('click', () => {
    if (parseInt(mainFormRequest.style.marginLeft) >= -200) {
        mainFormRequest.style.marginLeft = `${parseInt(mainFormRequest.style.marginLeft) - 100}%`
    }

    if (parseInt(mainFormRequest.style.marginLeft) < 0) {
        buttonsFormRequest.style.display = 'flex'
    }
})

