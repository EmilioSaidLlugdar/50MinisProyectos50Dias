const textE1 =document.getElementById('text')
const speedE1= document.getElementById('speed')
const text = "Amo la Programación"
let idx=1
let speed=300/speedE1.value

whriteTExt()

function whriteTExt(){
    textE1.innerText=text.slice(0,idx)
    idx++

    if(idx>text.length){
        idx=1
    }

    setTimeout(whriteTExt,speed)
}

speedE1.addEventListener('input',(e)=> speed =300/e.target.value)