const container=document.getElementById('container')
const text=document.getElementById('text')
console.log(container)

function mode(){
    container.classList.remove('day')
    container.classList.add('night')
    // container.classList.toggle('night')
    // container.classList.toggle('day')
}

var newtext=""
function changeHere(e){
    console.log(e.target.value)
    newtext=e.target.value
}
function clickhere(){
    text.innerHTML=newtext
}