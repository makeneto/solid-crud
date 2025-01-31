'use-strict'

const ratingInfo = document.getElementById('reset')

ratingInfo.addEventListener('click', () => {
    const imessage = document.querySelector('.message__solid')

    window.scrollTo({ top: 0 })

    imessage.style.left = '50%'
    imessage.style.opacity = '1'
    imessage.style.visibility = 'visible'

    window.setTimeout(() => {
        imessage.style.left = '44%'
        imessage.style.opacity = '0'
        imessage.style.visibility = 'hidden'
    }, 4000)
})
