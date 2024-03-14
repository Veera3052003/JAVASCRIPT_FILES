const container=document.getElementById('container')
function clickhere(color){
    container.style.backgroundColor=color
    container.children[0].innerHTML=color
    container.children[1].innerHTML=`this is ${color} color`
}
console.log(container.children) 

container.addEventListener('mouseover',()=>{
    container.style.backgroundColor='black'
})

const word='welcome'
console.log(`this is a letter ${word.charAt(4)}`)

console.log(word.includes('l'))

console.log(word.indexOf('l'))

console.log(word.split())

console.log(word.split(''))

var sentence='welcome welcome welcome welcome'
console.log(sentence.split(' '))

const num=31
console.log(typeof num.toString())