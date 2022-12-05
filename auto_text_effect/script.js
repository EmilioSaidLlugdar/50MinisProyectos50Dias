const textE1 =document.getElementById('text')
const speedE1= document.getElementById('speed')
const text = "Amo la Programación"
let idx=1
let speed=300/speedE1.value

whriteTExt()

function whriteTExt(){
    //innerText establece o devuelve el contenido de texto como 
    //texto sin formato del nodo especificado y todos sus descendientes
    textE1.innerText=text.slice(0,idx)
    //slice() El método slice() devuelve una copia de una parte del array 
    //dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
    idx++

    if(idx>text.length){
        idx=1
    }

    setTimeout(whriteTExt,speed)
    //El método setTimeout() de JavaScript es un método incorporado que permite temporizar la 
    //ejecución de una determinada función . Es necesario pasar la cantidad de tiempo a esperar en milisegundos
    //lo que significa que para esperar un segundo, es necesario pasar mil milisegundos 
}

speedE1.addEventListener('input',(e)=> speed =300/ e.target.value)

/*El método addEventlistener, es un escuchador que indica al navegador que este atento 
a la interacción del usuario. La ventaja es que se escribe totalmente en el JS, 
sin necesidad de tocar el HTML. */