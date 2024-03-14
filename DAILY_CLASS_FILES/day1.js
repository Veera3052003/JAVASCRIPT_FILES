//Day 1

console.log("yes")

//Data type

//primitive type

// a-z string -----> '' or " "
// 0-9 number -----> 1234
// true or false boolean ---> true false
// undefined
// null

// non-primitive type

// array ----> [1,2,3,'welcome']
// object ---> {name:"veera",
//                 age:20,
//                 place:"chennai"}

// var let const ----> keywords

var newname='veera'
console.log(newname)

var age=20
var status=true
console.log(age,status)

var arr=[1,2,3,'Welcome']
console.log(arr)

var obj={name:"veera",
            age:20,
            place:"chennai"
        }
console.log(obj)

//if else statement

//if syntax

//if(condition){
//     statement
// }else{
//     statement
// }

var a=3;
var b=5;

if(b%2!=0){
    console.log('odd')
}else{
    console.log('even')
};

//for loop

//for loop syntax

// for(initialization;condition;increment/decrement){
//     statement
// }

var arr=[1,2,3,4,5]

console.log(arr.length,'length')
console.log(arr[4],'value')

console.log("Displaying the i value starting from 0 and end value as length of the arr array")
for(var i=0;i<arr.length;i++){
    console.log(i)
}

console.log("Displaying the elements of the arr array")
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

