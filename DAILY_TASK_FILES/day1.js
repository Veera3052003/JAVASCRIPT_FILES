// 22/Jan/2024 Task

//Task - 1  

// Display the Even number elements in the array

var arr=[1,2,3,4,5,6,7,8,9,10]

console.log("Displaying the even elements in the arr array")
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}

//Task - 2

// else if and nested if syntax

//else if syntax

// if(condition1){
//     statement
// }else if(condition2){
//     statement
// }else{
//     statement
// }

//else if

var age=18;
if(age<0){
    console.log("Inappropriate value")
}else if(age<18){
    console.log("Not eligible to vote")
}else{
    console.log("Eligible to vote")
}

//Nested if syntax

// if(condition1){
//     if(condition2){
//         statement
//     }
// }else{
//     statement
// }

//Nested if

var age=20
if(age>17){
    console.log("Eligible for driving license")
    if(age==18 || age==19){
        console.log("All the best")
    }
}else{
    console.log("You are not eligible for driving license")
}
