const signIn = () => {
    const signInButton = document.getElementById('signIn')

    signInButton.addEventListener('submit', (e) => {
        e.preventDefault()

        window.location.href = "/index.html"
    })
}

signIn()
