

const supportMessage = () => {
    const submitSupport = document.querySelector('#support')

    submitSupport.addEventListener('submit', (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const supportContainer = document.getElementById('supportform')
        const supportLoader = document.querySelector('.loader__container')
        const supportName = document.getElementById('supportName')
        const supportEmail = document.getElementById('supportEmail')
        const supportAssunto = document.getElementById('supportAssunto')
        const supporttel = document.getElementById('supporttel')
        const mensagem = document.getElementById('mensagem')
        const imessage = document.querySelector('.message__solid')

        supportLoader.style.display = 'block'
        supportContainer.style.filter = 'blur(5px)'
        supportName.value = ''
        supportEmail.value = ''
        supportAssunto.value = ''
        supporttel.value = ''
        mensagem.value = ''
        
        window.setTimeout(() => {
            supportContainer.style.filter = 'blur(0)'
            supportLoader.style.display = 'none'
            imessage.style.left = '50%'
            imessage.style.opacity = '1'
            imessage.style.visibility = 'visible'
            
        }, 5000)

        window.setTimeout(() => {
            imessage.style.left = '44%'
            imessage.style.opacity = '0'
            imessage.style.visibility = 'hidden'
        }, 10100)
    })
}

supportMessage()