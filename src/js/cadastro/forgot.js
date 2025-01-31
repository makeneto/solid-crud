const forgotPassword = () => {
    const forgot = document.getElementById('forgot')

    forgot.addEventListener('submit', (e) => {
        e.preventDefault()

        window.location.href = '/src/pages/cadastro/verify-otp.html'
    })
}

forgotPassword()