const getNewPassword = () => {
    const newPass = document.getElementById('newPass')

    newPass.addEventListener('submit', (e) => {
        e.preventDefault()

        window.location.href = '/src/pages/cadastro/signIn.html'
    })
}

getNewPassword()