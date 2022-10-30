const add = (a : number, b : number) : number=>{
    return a+b
}


const exampleFunction = (a:number) => (b:number) => {
    let sum = a + b;
    console.log("Hello World!" + sum)
    return 1;
}

console.log(exampleFunction(2)(3))
console.log(add(3,45));