//querySelector() Devuelve el primer elemento del documento 
//(utilizando un recorrido primero en profundidad pre ordenado
// de los nodos del documento) que coincida con el grupo especificado 
//de selectores.

const buttons = document.querySelectorAll('.riple')

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offserTop
        const buttonLeft = e.target.offserLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement ('span')
        circle.classList.add ('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })

})