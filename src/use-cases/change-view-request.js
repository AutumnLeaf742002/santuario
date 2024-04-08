const mainFormRequest = document.getElementById('mainFormRequest')
const buttonsFormRequest = document.getElementById('buttonsFormRequest')
const buttonNext = document.getElementById('buttonNext')
const buttonBack = document.getElementById('buttonBack')
const button__create__new__request = document.getElementById('button__create__new__request')

mainFormRequest.style.marginLeft = '0%'

buttonNext.addEventListener('click', () =>{
    if(parseInt(mainFormRequest.style.marginLeft) >= -200){
        mainFormRequest.style.marginLeft = `${parseInt(mainFormRequest.style.marginLeft) - 100}%`
    }

    if(parseInt(mainFormRequest.style.marginLeft) < 0){
        buttonsFormRequest.style.display = 'flex'
    }

    if(parseInt(mainFormRequest.style.marginLeft) === -300){
        buttonNext.textContent = 'Guardar'
    }
})

buttonBack.addEventListener('click', () => {
    if(parseInt(mainFormRequest.style.marginLeft) <= -100){
        mainFormRequest.style.marginLeft = `${parseInt(mainFormRequest.style.marginLeft) + 100}%`
    }

    if(parseInt(mainFormRequest.style.marginLeft) === 0){
        buttonsFormRequest.style.display = 'none'
    }

    if(parseInt(mainFormRequest.style.marginLeft) !== 300){
        buttonNext.textContent = 'Siguiente'
    }
})

button__create__new__request.addEventListener('click', () => {
    if(parseInt(mainFormRequest.style.marginLeft) >= -200){
        mainFormRequest.style.marginLeft = `${parseInt(mainFormRequest.style.marginLeft) - 100}%`
    }

    if(parseInt(mainFormRequest.style.marginLeft) < 0){
        buttonsFormRequest.style.display = 'flex'
    }
})