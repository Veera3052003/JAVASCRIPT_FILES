// 23/Jan/2024 Task

//Task - 1  

// Display the repeating element in the array using for loop and if statement


// function repeated_no_count_func(arr){
//     var empty_arr=[]
//     var repeated_no_count=0
    
    
    // for element in arr{
    //     if(!(element in empty_arr)){
    //         empty_arr+=[element]
    //     }
    //     else{
    //         repeated_no_count+=1
    //     }
    // return repeated_no_count
    // }


    // for(var i=0;i<arr.length;i++){
    //     var element=arr[i]
    //     if(!(element in empty_arr)){
    //         empty_arr+=element
    //     }else{
    //         repeated_no_count+=1
    //         var repeated_element=arr[i]
    //         console.log('Repeated element',repeated_element,'repeated element count',repeated_no_count)
    //     }
    // }
// }
// var array=[1,2,3,1,4,5,1,6,1]
// repeated_no_count_func(array)

// function repeated_no_count_func(arr){
//     var empty_arr=[]
//     var repeated_no_count=1

//     for(var i=0;i<arr.length;i++){
//          var element=arr[i]        
//          if(!empty_arr.includes(element)){
//              empty_arr+=element
//          }else{
//              repeated_no_count+=1
//              var repeated_element=arr[i]
//          }
//      }
//     console.log('Repeated element',repeated_element,'repeated element count',repeated_no_count)
// }
// var array=[1,2,3,1,4,5,1,6,1]
// repeated_no_count_func(array)

function find_repeated_no(arr){
    for(var i=0;i<arr.length;i++){
        var repeated_element=arr[i]
        var repeated_no_count=1
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                repeated_no_count+=1
            }
        }
        if(repeated_no_count>1){
            console.log('Repeated value:',repeated_element,'Repeated value count:',repeated_no_count)
        }
    }
    
}

find_repeated_no([1,2,2,4,4,1,3,1,4,1])



