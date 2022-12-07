const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animate_bgs= document.querySelectorAll('.animated-bg') 
const animated_bg_text= document.querySelectorAll('.animated-bg-text')

/*La función setTimeout() es una función nativa de JavaScript que establece
un temporizador en milisegundos para ejecutar una función callback al finalizar 
dicho temporizador. Dicho de otro modo, setTimeout() sirve para ejecutar 
una función tras un periodo determinado */
setTimeout(getData,2500)

function getData(){
    header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>'
    
    title.innerHTML = '50 Minis Proyectos en 50 Días'
    excerpt.innerHTML =
    'Aprendiendo HTML + JS + CSS'
    profile_img.innerHTML=
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = 'Llugdar Emilio Said'
    date.innerHTML = 'Dic 06, 2022'

    animate_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'))
}