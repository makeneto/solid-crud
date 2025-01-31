const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const value = e.target.value;

        if (!/^\d*$/.test(value)) {
            e.target.value = '';
            return;
        }

        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus()
        }

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !value && index > 0) {
                inputs[index - 1].focus()
            }
        })
    })
})


const getOtpCode = () => {
    const otp = document.getElementById('otp')

    otp.addEventListener('submit', (e) => {
        e.preventDefault()

        window.location.href = '/src/pages/cadastro/new-password.html'
    })
}

getOtpCode()