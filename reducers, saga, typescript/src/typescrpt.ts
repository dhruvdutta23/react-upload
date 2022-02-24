export {}
function someName(a:number,b:number ):void |number{
return a+b
}

console.log(someName(2,2))
console.log("hi")

let a: number
a=12

let b:boolean
b=true

let c: Person

let d:{
    name:'dhruba',
    age: 12

}

var dc: Person[]
dc=[ {
    name:'dhruba',
    age:12
}]

type Person={
    name:string,
    age:number
}


const func= <T> (arr:T[], val:T)=>{
return [val, ...arr]
}
const res=func (['1,2,3,4','dhdhb'], 'some')
//res[0].split()

const ap=<T>( b:number[],a:number):number[]=>{
    return [a, ...b]
}

let store= ap( [123, 20],290)
console.log(store)
//console.log(store[0].split(''))