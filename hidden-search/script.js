const seacrh = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    seacrh.classList.toggle('active')
    input.focus()
})