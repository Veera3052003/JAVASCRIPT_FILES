const bts=['Kim Namjoon','Kim Seokjin','Min Yoongi','Jung Hosoek','Park Jimin','Kim Taehuyng','Jeon Jungkook']
console.log(bts.pop())
console.log(bts)
bts.push('Jeon Jungkook')
console.log(bts)
console.log(bts.shift())
console.log(bts.unshift('Kim Namjoon'))
console.log(bts.join())
console.log(bts)
console.log(bts.includes('Park Jimin'))
if(bts.includes('park Jimin')){
    bts.pop()
    console.log(bts)
}
const array1=['a','b','c']
console.log(array1,'array1')

const array2=['d','e','f']
console.log(array2,'array2')

const array3=array1.concat(array2)
console.log(array3)

const array4=[...array1,...array2]

console.log(...array1)

console.log(array4)

const newArray=[1,2,3,4,5,6,7,8,9]
var str=0
newArray.forEach((item)=>{
    str=str+item
    console.log(item)
})
console.log(str)
console.log(newArray.join(''))


