function validaArray(arr, num) {

    try{
    
         if (!arr && !num) 
         throw new ReferenceError("Envie os parametros")
  
        if (typeof arr !== 'object') 
        throw new TypeError("Array precisa ser object");
   
        if (typeof num !== 'number') 
        throw new TypeError("Array precisa ser number");
   
        if(arr.length !== num) throw new RangeError("Tamanho invalido");
  
    return arr;

}

 catch (e) {

     if(e instanceof ReferenceError) {
       console.log("Este erro e um ReferenceError")
       console.log(e.message)
    } else if(e instanceof TypeError) {
        console.log("Este erro e um ReferenceError")
        console.log(e.message)
     }else if(e instanceof RangeError) {
        console.log("Este erro e um ReferenceError")
        console.log(e.message)
    } else {
        console.log("Tipo de erro nao esperado:" + e)
    }  
  }
}
console.log(validaArray([1,2,3,4,5],5));
