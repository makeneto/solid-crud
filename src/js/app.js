

// smartphones

if (window.innerWidth >= 320 && window.innerWidth <= 768) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')
        let text1 = document.getElementById('description1')
        let text2 = document.getElementById('description2')

        if (scrollPosition > 900) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

        // Testemunhal 1
        if (scrollPosition > 3400 && scrollPosition < 5500) {
            text1.classList.add('show')
            image1.classList.add('blur')
        }
        else {
            text1.classList.remove('show')
            image1.classList.remove('blur')
        }

        // Testemunhal 2
        if (scrollPosition > 5500) {
            text2.classList.add('show')
            image2.classList.add('blur')
        }
        else {
            text2.classList.remove('show')
            image2.classList.remove('blur')
        }
    })
}


// Tablets
if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')
        let text1 = document.getElementById('description1')
        let text2 = document.getElementById('description2')

        if (scrollPosition > 900) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

        // Testemunhal 1
        if (scrollPosition >= 2600 && scrollPosition < 4924) {
            text1.classList.add('show')
            image1.classList.add('blur')
        }
        else {
            text1.classList.remove('show')
            image1.classList.remove('blur')
        }

        // Testemunhal 2
        if (scrollPosition > 4924) {
            text2.classList.add('show')
            image2.classList.add('blur')
        }
        else {
            text2.classList.remove('show')
            image2.classList.remove('blur')
        }
    })
}


// Laptops
if (window.innerWidth >= 1024 && window.innerWidth <= 1439) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')
        let text1 = document.getElementById('description1')
        let text2 = document.getElementById('description2')

        if (scrollPosition > 900) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

        // Testemunhal 1
        if (scrollPosition > 2000 && scrollPosition < 4500) {
            text1.classList.add('show')
            image1.classList.add('blur')
        }
        else {
            text1.classList.remove('show')
            image1.classList.remove('blur')
        }

        // Testemunhal 2
        if (scrollPosition > 4500) {
            text2.classList.add('show')
            image2.classList.add('blur')
        }
        else {
            text2.classList.remove('show')
            image2.classList.remove('blur')
        }
    })
}

if (window.innerWidth >= 1440 && window.innerWidth <= 1525) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')
        let text1 = document.getElementById('description1')
        let text2 = document.getElementById('description2')

        if (scrollPosition > 545) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

        // Testemunhal 1
        if (scrollPosition > 2751 && scrollPosition < 5641) {
            text1.classList.add('show')
            image1.classList.add('blur')
        }
        else {
            text1.classList.remove('show')
            image1.classList.remove('blur')
        }

        // Testemunhal 2
        if (scrollPosition > 5641) {
            text2.classList.add('show')
            image2.classList.add('blur')
        }
        else {
            text2.classList.remove('show')
            image2.classList.remove('blur')
        }
    })
}


// Desktops
if (window.innerWidth >= 1526) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')
        let text1 = document.getElementById('description1')
        let text2 = document.getElementById('description2')

        if (scrollPosition > 545) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

        // Testemunhal 1
        if (scrollPosition > 2893 && scrollPosition < 5863) {
            text1.classList.add('show')
            image1.classList.add('blur')
        }
        else {
            text1.classList.remove('show')
            image1.classList.remove('blur')
        }

        // Testemunhal 2
        if (scrollPosition > 5863) {
            text2.classList.add('show')
            image2.classList.add('blur')
        }
        else {
            text2.classList.remove('show')
            image2.classList.remove('blur')
        }
    })
}



// Mav bar para mobile
const navExpand = document.getElementById('nav-expand'),
    navExpandList = document.getElementById('nav-expand-list'),
    navExpandIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
    navExpandList.classList.toggle('show-list')
    navExpandIcon.classList.toggle('rotate-icon')
})

// 
const getBeneficiosSolid = () => {
    const beneficio1 = document.querySelector('.benefits1')
    const beneficio2 = document.querySelector('.benefits2')
    const beneficio3 = document.querySelector('.benefits3')

    beneficio1.addEventListener('click', () => {
        const beneficiosText = document.querySelector('.benefits__title')
        const text1 = document.querySelector('.benefits__text1')
        const text2 = document.querySelector('.benefits__text2')
        const borderBlue1 = document.querySelector('.border__blue1')
        const borderBlue2 = document.querySelector('.border__blue2')
        const borderBlue3 = document.querySelector('.border__blue3')

        borderBlue1.style.display = 'block'
        borderBlue2.style.display = 'none'
        borderBlue3.style.display = 'none'


        beneficiosText.textContent = 'Por que Escolher a Solid?'

        text1.textContent = 'A Solid se destaca na venda de jogos online. Com uma biblioteca diversificada, que inclui lançamentos e clássicos. Nossa plataforma é simples e rápida, facilitando a busca por novos títulos.'

        text2.textContent = 'Nosso suporte ao cliente é ágil e sempre disponível para ajudar. Além disso, oferecemos promoções regulares e ofertas exclusivas, tornando a compra de jogos ainda mais acessível.'
    })

    beneficio2.addEventListener('click', () => {
        const beneficiosText = document.querySelector('.benefits__title')
        const text1 = document.querySelector('.benefits__text1')
        const text2 = document.querySelector('.benefits__text2')
        const borderBlue1 = document.querySelector('.border__blue1')
        const borderBlue2 = document.querySelector('.border__blue2')
        const borderBlue3 = document.querySelector('.border__blue3')

        borderBlue1.style.display = 'none'
        borderBlue2.style.display = 'block'
        borderBlue3.style.display = 'none'


        beneficiosText.textContent = 'Vantagens na Compra de Jogos.'

        text1.textContent = 'Comprar seus jogos na Solid, a plataforma oferece promoções exclusivas e descontos em uma ampla seleção de títulos, garantindo que você tenha acesso aos seus games favoritos por um preço mais acessível.'

        text2.textContent = 'Outra grande vantagem é o acesso rápido aos jogos. Com a Solid, você pode baixar seus jogos instantaneamente após a compra, sem complicações. Nossa equipe de suporte também está sempre disponível para ajudar em qualquer etapa.'
    })

    beneficio3.addEventListener('click', () => {
        const beneficiosText = document.querySelector('.benefits__title')
        const text1 = document.querySelector('.benefits__text1')
        const text2 = document.querySelector('.benefits__text2')
        const borderBlue1 = document.querySelector('.border__blue1')
        const borderBlue2 = document.querySelector('.border__blue2')
        const borderBlue3 = document.querySelector('.border__blue3')

        borderBlue1.style.display = 'none'
        borderBlue2.style.display = 'none'
        borderBlue3.style.display = 'block'


        beneficiosText.textContent = 'O que torna a Solid Única?'

        text1.textContent = 'A Solid se destaca por oferecer uma experiência de compra de jogos completamente voltada para o jogador. Nossa plataforma é intuitiva, rápida e repleta de opções, com uma biblioteca diversificada que atende a todos os perfis de gamers, desde os casuais até os mais hardcore.'

        text2.textContent = 'Outro diferencial é a garantia de ofertas exclusivas e lançamentos antecipados, mantendo nossos gamers sempre atualizados com o melhor do mercado.'
    })
}

getBeneficiosSolid()

// Perguntas e respostas frequentes
const getAnswer = () => {
    const faq1 = document.querySelector('.show__answer1')
    const faq2 = document.querySelector('.show__answer2')
    const faq3 = document.querySelector('.show__answer3')

    faq1.addEventListener('click', () => {
        const answer1 = document.querySelector('.answer1')
        const answer2 = document.querySelector('.answer2')
        const answer3 = document.querySelector('.answer3')

        answer1.style.display = 'block'
        answer2.style.display = 'none'
        answer3.style.display = 'none'
    })

    faq2.addEventListener('click', () => {
        const answer1 = document.querySelector('.answer1')
        const answer2 = document.querySelector('.answer2')
        const answer3 = document.querySelector('.answer3')

        answer1.style.display = 'none'
        answer2.style.display = 'block'
        answer3.style.display = 'none'
    })

    faq3.addEventListener('click', () => {
        const answer1 = document.querySelector('.answer1')
        const answer2 = document.querySelector('.answer2')
        const answer3 = document.querySelector('.answer3')

        answer1.style.display = 'none'
        answer2.style.display = 'none'
        answer3.style.display = 'block'
    })
}

getAnswer()

// Suporte 
const sendSupportMessage = () => {
    const submitSupport = document.querySelector('#support')

    submitSupport.addEventListener('submit', (e) => {
        e.preventDefault()

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

sendSupportMessage()

// Ano no Rodapé
const getFooterYear = () => {
    const footerYear = document.querySelector('.year__footer')
    // eslint-disable-next-line no-undef
    const now = moment()

    footerYear.textContent = now.year()
}
setInterval(getFooterYear, 1000)