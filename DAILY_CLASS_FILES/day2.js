//Day 2

for(i=0;i<5;i++){
    console.log("Loop 1")
    for(j=0;j<5;j++){
        console.log("loop 2")
    }
}

//Function

//Named function

function newFunc(){
    console.log('Welcome')
}
newFunc()

//Ananomus function

var secFunc=function(){
    console.log('SecFunc')
}
secFunc()

//Arrow function

var nextFunc=()=>{
    console.log('nextFunc')
}
nextFunc()

//With Argument, With Return Value

function newFunc(value,a){
    var c=value+a
    return c
}
var cvalue=newFunc(10,5)
console.log(cvalue)

//With Argument, Without Return value

function newfuc(value,a){
    var c=value+a
    console.log(c)
}
newfuc(10,5)

//Without Argument, Without Return value

function newfunc(){
    var c=10
    console.log(c)
}
newfunc()

//Without Argument, with Return value

function newfuncs(){
    var c=10
    return c
}
var cvalue=newfuncs()
console.log(cvalue)

//DOM - Document Object Model

const containers = document.getElementById('container')
console.log(containers)