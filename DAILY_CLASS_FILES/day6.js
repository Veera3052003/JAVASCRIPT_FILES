//29/Jan/2023

//map function

const newArray=[1,2,3,4,5,6,7,8,9]
const mapArray=newArray.map((ele)=>{
    // console.log(ele)
    return ele*2
})
console.log(mapArray,newArray)

//some function

const someArray=newArray.some((ele)=>{
    return ele%2===0
})

//every function

// const everyArray=newArray.every((ele)=>{
//     return ele%2===0
// })

const everyArray=mapArray.every((ele)=>{
    return ele%2===0
})

console.log(someArray,everyArray)  // returns true or false

//filter

const filterValue=newArray.filter((ele)=>{
    return ele%2===0
})

console.log(filterValue)

//splice
//syntax
// splice(start,deleteCount,item1)

const months=['Jan','March','April','June']
months.splice(1,0,'Feb') //Inserts the element
console.log(months)

months.splice(4,1,'May') //Replaces the element
console.log(months)

//slice
//syntax
// slice(startIndex,endIndex)  endIndex(endIndex-1)

const animals=['ant','bison','camel','duck','elephant']
console.log(animals.slice(2)) // values starting from index 2 till end of the list, if we doesn't mention the end index value

console.log(animals)// This implies the original array doesn't change

console.log(animals.slice(2,4))// ['camel','duck'] only 2nd and 3rd element displays because the end index value is 4 [4-1=3  so, 2,3 index values are displayed]

//object

const obj={
    key:'values',
    name:'bts',
    address:'somewhere',
    contact:'9324718604',
    emailId:'test@gmail.com'
}
console.log(obj.name)

const object={}

object.name='someone'
object.address='somewhere'
console.log(object)  // Returns array of element

console.log(object.name)// Returns value: someone



