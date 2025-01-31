

// Mav bar para mobile
const navExpand = document.getElementById('nav-expand'),
    navExpandList = document.getElementById('nav-expand-list'),
    navExpandIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
    navExpandList.classList.toggle('show-list')
    navExpandIcon.classList.toggle('rotate-icon')
})

const anoFooter = () => {
    const footerYear = document.querySelector('.year__footer')
    // eslint-disable-next-line no-undef
    const now = moment()

    footerYear.textContent = now.year()
}

setInterval(anoFooter, 1000)