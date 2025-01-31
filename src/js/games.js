'use-strict'

const carrosseisGames = () => {
    // Primeiro Carrossel

    const carrossel1 = () => {
        const container = document.querySelector(".carrossel1")
        const nextBtn = document.querySelector(".arrowLeft1")
        const prevBtn = document.querySelector(".arrowRight1")

        const itemWidth = document.querySelector(".col1").offsetWidth + 9000

        nextBtn.addEventListener("click", () => {
            container.scrollLeft += itemWidth
        })

        prevBtn.addEventListener("click", () => {
            container.scrollLeft -= itemWidth
        })
    }

    carrossel1()

    // Segundo Carrossel
    const carrossel2 = () => {
        const container = document.querySelector(".carrossel2")
        const nextBtn = document.querySelector(".arrowLeft2")
        const prevBtn = document.querySelector(".arrowRight2")

        const itemWidth = document.querySelector(".col2").offsetWidth + 9000

        nextBtn.addEventListener("click", () => {
            container.scrollLeft += itemWidth
        })

        prevBtn.addEventListener("click", () => {
            container.scrollLeft -= itemWidth
        })
    }

    carrossel2()

    // Terceiro Carrossel
    const carrossel3 = () => {
        const container = document.querySelector(".carrossel3")
        const nextBtn = document.querySelector(".arrowLeft3")
        const prevBtn = document.querySelector(".arrowRight3")

        const itemWidth = document.querySelector(".col3").offsetWidth + 9000

        nextBtn.addEventListener("click", () => {
            container.scrollLeft += itemWidth
        })

        prevBtn.addEventListener("click", () => {
            container.scrollLeft -= itemWidth
        })
    }

    carrossel3()

    // Quarto Carrossel

    const carrossel4 = () => {
        const container = document.querySelector(".carrossel4")
        const nextBtn = document.querySelector(".arrowLeft4")
        const prevBtn = document.querySelector(".arrowRight4")

        const itemWidth = document.querySelector(".col4").offsetWidth + 9000

        nextBtn.addEventListener("click", () => {
            container.scrollLeft += itemWidth
        })

        prevBtn.addEventListener("click", () => {
            container.scrollLeft -= itemWidth
        })
    }

    carrossel4()

    // Carrossel em SmartPhones
    if (innerWidth >= 320 && innerWidth <= 767) {
        const carrossel1 = () => {
            const container = document.querySelector(".carrossel1")
            const nextBtn = document.querySelector(".arrowLeft1")
            const prevBtn = document.querySelector(".arrowRight1")

            const itemWidth = document.querySelector(".col1").offsetWidth + 197

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel1()

        // Segundo Carrossel
        const carrossel2 = () => {
            const container = document.querySelector(".carrossel2")
            const nextBtn = document.querySelector(".arrowLeft2")
            const prevBtn = document.querySelector(".arrowRight2")

            const itemWidth = document.querySelector(".col2").offsetWidth + 197

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel2()

        // Terceiro Carrossel
        const carrossel3 = () => {
            const container = document.querySelector(".carrossel3")
            const nextBtn = document.querySelector(".arrowLeft3")
            const prevBtn = document.querySelector(".arrowRight3")

            const itemWidth = document.querySelector(".col3").offsetWidth + 197

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel3()

        // Quarto Carrossel

        const carrossel4 = () => {
            const container = document.querySelector(".carrossel4")
            const nextBtn = document.querySelector(".arrowLeft4")
            const prevBtn = document.querySelector(".arrowRight4")

            const itemWidth = document.querySelector(".col4").offsetWidth + 197

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel4()
    }

    // Carrossel em Tablets
    if (innerWidth >= 768 && innerWidth <= 1023) {
        const carrossel1 = () => {
            const container = document.querySelector(".carrossel1")
            const nextBtn = document.querySelector(".arrowLeft1")
            const prevBtn = document.querySelector(".arrowRight1")

            const itemWidth = document.querySelector(".col1").offsetWidth + 524

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel1()

        // Segundo Carrossel
        const carrossel2 = () => {
            const container = document.querySelector(".carrossel2")
            const nextBtn = document.querySelector(".arrowLeft2")
            const prevBtn = document.querySelector(".arrowRight2")

            const itemWidth = document.querySelector(".col2").offsetWidth + 524

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel2()

        // Terceiro Carrossel
        const carrossel3 = () => {
            const container = document.querySelector(".carrossel3")
            const nextBtn = document.querySelector(".arrowLeft3")
            const prevBtn = document.querySelector(".arrowRight3")

            const itemWidth = document.querySelector(".col3").offsetWidth + 524

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel3()

        // Quarto Carrossel

        const carrossel4 = () => {
            const container = document.querySelector(".carrossel4")
            const nextBtn = document.querySelector(".arrowLeft4")
            const prevBtn = document.querySelector(".arrowRight4")

            const itemWidth = document.querySelector(".col4").offsetWidth + 524

            nextBtn.addEventListener("click", () => {
                container.scrollLeft += itemWidth
            })

            prevBtn.addEventListener("click", () => {
                container.scrollLeft -= itemWidth
            })
        }

        carrossel4()
    }
}

carrosseisGames()

const openPublicity = document.getElementById('open_publicity')
const closePublicity = document.getElementById('close_publicity')

openPublicity.addEventListener('click', () => {
    const close = document.getElementById('close_publicity')
    const video = document.querySelector('.play__video--ps5-pro')
    const store = document.querySelector('.store')

    close.style.visibility = 'visible'
    close.style.opacity = '1'

    video.style.visibility = 'visible'
    video.style.opacity = '1'
    video.play()

    store.style.filter = 'brightness(20%) blur(18px)'
})

closePublicity.addEventListener('click', () => {
    const video = document.querySelector('.play__video--ps5-pro')
    const store = document.querySelector('.store')
    const closeBtn = document.getElementById('close_publicity')

    closeBtn.style.visibility = 'hidden'
    closeBtn.style.opacity = '0'

    video.style.visibility = 'hidden'
    video.style.opacity = '0'
    video.pause()

    store.style.filter = 'none'
})


// Botão scroll Top
if (window.innerWidth >= 320 && window.innerWidth <= 768) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')

        if (scrollPosition > 900) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
    })
}


// Tablets
if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')

        if (scrollPosition > 900) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
    })
}


// Laptops
if (window.innerWidth >= 1024 && window.innerWidth <= 1439) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')

        if (scrollPosition > 900) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
    })
}


// Desktops
if (window.innerWidth >= 1439) {
    document.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY
        let scrollTop = document.querySelector('.scroll-top')

        if (scrollPosition > 545) {
            scrollTop.style.display = 'flex'
        }
        else {
            scrollTop.style.display = 'none'
        }

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
    })
}