const accordions = document.querySelectorAll('.accordion')
const accordionIcons = document.querySelectorAll('.accordion .icon')

accordionIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        if (icon.parentNode.parentNode.classList.contains('active')) {
            icon.parentNode.parentNode.classList.remove('active')
            return;
        }
        accordions.forEach((accordion) => {
            accordion.classList.remove('active')
        })
        icon.parentNode.parentNode.classList.toggle('active')

    })
})