
const signUp = () => {
    const signUpButton = document.getElementById('signUp')

    signUpButton.addEventListener('submit', (e) => {
        e.preventDefault()

        window.location.href = "/src/pages/cadastro/signIn.html"
    })
}

signUp()