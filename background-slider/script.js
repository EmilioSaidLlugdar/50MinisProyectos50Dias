const body=document.body
/*querySelector() Devuelve el primer elemento del documento
(utilizando un recorrido primero en profundidad pre ordenado
de los nodos del documento) que coincida con el grupo 
especificado de selectores */
const slides= document.querySelectorAll('.slide')
const leftBtn=document.getElementById('left')
const rightBtn =document.getElementById('right')

let activeSlide=0

rightBtn.addEventListener('click',() =>{
    activeSlide++

    if(activeSlide>slides.length-1){
        activeSlide =0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', ()=>{
    activeSlide--

    if(activeSlide<0){
        activeSlide=slides.length-1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function  setBgToBody(){
    body.style.backgroundImage=slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}