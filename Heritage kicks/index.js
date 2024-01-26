const homeButton = document.querySelector('.home')
const aboutButton = document.querySelector('.about')
const collabButton = document.querySelector('.collab')
const productsButton = document.querySelector('.product')
const contactButton = document.querySelector('.contact')
const hoverSpan = document.querySelector('.hover')

homeButton.addEventListener('mouseenter', function () {
    hoverSpan.style.width = '65px'
})
aboutButton.addEventListener('mouseenter', function () {
    hoverSpan.style.width = '88px'
})
collabButton.addEventListener('mouseenter', function () {
    hoverSpan.style.width = '117px'
})
productsButton.addEventListener('mouseenter', function () {
    hoverSpan.style.width = '80px'
})
contactButton.addEventListener('mouseenter', function () {
    hoverSpan.style.width = '80px'
})
