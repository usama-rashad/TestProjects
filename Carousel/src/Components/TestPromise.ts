export const TestPromise = () =>{
    let a = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1);
        },2000)
    })
    return a;
}