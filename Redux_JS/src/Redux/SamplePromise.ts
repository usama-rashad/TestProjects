const delayedPromise = async (resolve,reject) => {
    setTimeout(()=>{
        resolve();
    },3000)
}
export default delayedPromise;