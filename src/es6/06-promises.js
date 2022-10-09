const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        if (true){
            resolve(0);
        } else {
            reject('No!');
        }
    })
}
anotherFunction()
.then(response => console.log(response))            //then: Se cumple con exito. argumento del resolve. varios then
.catch(err => console.log(err))                     //catch: No se cumple con exito. argumento del reject
.finally(() => console.log('Finalizo la promesa!')); //finally: Termina la promesa

