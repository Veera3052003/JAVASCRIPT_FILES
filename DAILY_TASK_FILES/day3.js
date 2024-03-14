//24-Jan-2024

const color=document.getElementById("content")

function colorChange(){
    if(color.classList=='day'){
        color.classList.remove('day')
        color.classList.add('night')
    }else{
        color.classList.remove('night')
        color.classList.add('day')
    } 
}