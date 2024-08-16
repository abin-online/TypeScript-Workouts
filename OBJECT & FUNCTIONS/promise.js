function addNumber(a, b)  {
    return new Promise((resolve, reject) => {
        if(typeof a == "number" && typeof b == 'number'){
            sum = a+b
            resolve(sum)
        }else{
            reject('Cannot add')
        }
    })
}

addNumber(8,3).then((msg)=>{
    console.log('Success ', msg);
    
}).catch((err)=>{
    console.log('Rejected' , err);
    
})
