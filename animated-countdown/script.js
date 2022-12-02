const nums = document.querySelectorAll('.nums span')
const counter= document.querySelector('.counter')
const finalMessage= document.querySelector('.final')
const replay= document.querySelector('#replay')

runAnimation()

function resetDOM(){
    //forma práctica de acceder a la lista de clases de un elemento 
    //como una cadena de texto delimitada por espacios a través de element. className 
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    //forEach() ejecuta la función callback una vez por cada elemento del array; 
    //a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable.
    nums.forEach((num) =>{
        num.classList.value=''
    })

    nums[0].classList.add('in')
}

function runAnimation(){
    nums.forEach((num,idx)=>{
        const nextToLoast = nums.length - 1

        //El método addEventlistener, es un escuchador 
        //que indica al navegador que este atento a la interacción del usuario. 
        //La ventaja es que se escribe totalmente en el JS, sin necesidad de tocar el HTML.
        num.addEventListener('animationend',(e)=>{
            if (e.animationName ==='goIn' && idx!== nextToLoast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling){
                //nextElementSibling devuelve el elemento inmediatamente posterior al 
                //especificado, dentro de la lista de elementos hijos de su padre, 
                //o bien null si el elemento especificado es el último en dicha lista
                num.nextElementSibling.classList.add('in')
            }else{
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', ()=>{
    resetDOM() //restaura los elementos de un formulario a sus valores por defecto.
    runAnimation()
})