const formOthersServices = document.getElementById('formOthersServices')
const buttonNext = document.getElementById('buttonNext')
const buttonBack = document.getElementById('buttonBack')
const content__form__others__services = document.getElementById('content__form__others__services')

content__form__others__services.style.marginLeft = '0%'
buttonBack.style.display = 'none'

formOthersServices.addEventListener('submit', (e)=>{
    e.preventDefault()
})

buttonNext.addEventListener('click', () =>{
    buttonNext.value = "Guardar"
    buttonBack.style.display = 'inline-block'

    if(parseInt(content__form__others__services.style.marginLeft) > -100){
        content__form__others__services.style.marginLeft = `${parseInt(content__form__others__services.style.marginLeft) - 100}%`
    }

    console.log(parseInt(content__form__others__services.style.marginLeft))
})

buttonBack.addEventListener('click', () => {
    buttonNext.value = "Siguiente"
    buttonBack.style.display = 'none'

    if(parseInt(content__form__others__services.style.marginLeft) < 0){
        content__form__others__services.style.marginLeft = `${parseInt(content__form__others__services.style.marginLeft) + 100}%`
    }
})