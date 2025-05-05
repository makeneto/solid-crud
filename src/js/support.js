const supportMessage = () => {
    const submitSupport = document.querySelector('#support')

    submitSupport.addEventListener('submit', (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const supportContainer = document.getElementById('supportform')
        const supportLoader = document.querySelector('.loader__container')

        supportLoader.style.display = 'block'
        supportContainer.style.filter = 'blur(5px)'

        window.setTimeout(() => {
            supportContainer.style.filter = 'blur(0)'
            supportLoader.style.display = 'none'

            // ✨ Envia o formulário manualmente
            submitSupport.submit()

            // ✨ Limpa os campos do formulário após envio
            submitSupport.reset()
        }, 5000)
    })
}

supportMessage()