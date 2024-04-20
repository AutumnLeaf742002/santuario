let interactionNumber = 0
let currentChatOption = 0
let patientName = ''

const $chatBarForm = document.querySelector('.chat__bar')
const $messagesContainer = document.querySelector('.message__container')
const $chatInput = $chatBarForm.elements["chat-input"]

const createMessage = (message, type = 'bot') => {
    const $chatMessage = document.createElement('div')
    const $chatMessageChild = document.createElement('div')
    $chatMessageChild.innerText = message
    $chatMessage.classList.add('chat__message')
    $chatMessage.classList.add(type === 'client' ? 'user__patient' : 'user__service')

    $chatMessageChild.classList.add('message')
    $chatMessage.appendChild($chatMessageChild)

    $messagesContainer.append($chatMessage)
    $messagesContainer.scrollTop = $messagesContainer.scrollHeight
}

createMessage('Bienvenido a Santuario 🌴 ¿Con quién tenemos el placer de comunicarnos?')

$chatBarForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createMessage($chatInput.value, 'client')
    currentChatOption = parseInt($chatInput.value)
    $chatInput.value = ""
    if (interactionNumber === 0) {
        setTimeout(() => {
            createMessage('En este momento, queremos hacerle una serie de preguntas antes de asegurarnos que necesita un representante, escriba a alguno de estos números si coincide con su pregunta: \n\n (1) Registrar un familiar 👴🏻 \n (2) Registrarme 🧔🏻‍♂️ \n (3) Agendar cita 📅 \n (4) Pago 💸')
            interactionNumber++
        }, 1000)
    }
    if (interactionNumber === 1) {
        if (currentChatOption === 1) {
            setTimeout(() => {
                createMessage('Para registrar un familiar necesita su idenficanción, identificación del internado y número del encargado, ¿Aún necesita ayuda? \n\n (1) Sí ✅ \n (2) No ⛔')
                interactionNumber++;
            }, 1000)
        } else if (currentChatOption === 2) {
            setTimeout(() => {
                createMessage('Para registrase necesita su idenficanción y identificación de un encagado, ¿Aún necesita ayuda? \n\n (1) Sí ✅ \n (2) No ⛔')
                interactionNumber++;
            }, 1000)
        }
        else if (currentChatOption === 3) {
            setTimeout(() => {
                createMessage('Necesita hacer el registro en la parte de citas en su Santuario más cercano, ¿Aún necesita ayuda? \n\n (1) Sí ✅ \n (2) No ⛔')
                interactionNumber++;
            }, 1000)
        }
        else if (currentChatOption === 4) {
            setTimeout(() => {
                createMessage('Para hacer un pago por favor ingresar el id de su factura y enviar el monto de la misma a esta cuenta 9019019831, ¿Aún necesita ayuda? \n\n (1) Sí ✅ \n (2) No ⛔')
                interactionNumber++;
            }, 1000)
        } else {
            setTimeout(() => {
                createMessage('Por favor elija una de las opciones 📩')
                createMessage('En este momento, queremos hacerle una serie de preguntas antes de asegurarnos que necesita un representante, escriba a alguno de estos números si coincide con su pregunta: \n\n (1) Registrar un familiar 👴🏻 \n (2) Registrarme 🧔🏻‍♂️ \n (3) Agendar cita 📅 \n (4) Pago 💸')
            }, 1000)
        }
    }

    if (interactionNumber === 2) {
        console.log(interactionNumber)
        if (currentChatOption === 1) {
            setTimeout(() => {
                createMessage('Nos alegramos de eso, ¡que pase buen día! 😁')
                interactionNumber++;

            }, 1000)
        } else if (currentChatOption === 2) {
            setTimeout(() => {
                createMessage('Pronto nos comunicaremos con una persona del equipo de comunidación... muchas gracias por su comprensión... ⏱️')
                interactionNumber++;

            }, 1000)
        } else {
            setTimeout(() => {
                createMessage('Por favor elija una de las opciones 👆🏻')
            }, 1000)
        }
    }

    if (interactionNumber > 2) {
        setTimeout(() => {

            createMessage('Si tiene otra pregunta vuelva a reiniciar este chat 🔄️')
        }, 1000)
    }
})