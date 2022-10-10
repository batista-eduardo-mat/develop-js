const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        if (false){
            resolve(0);
        } else {
            reject('No!');
        }
    });
};
anotherFunction()
.then(response => console.log(response))            //then: Se cumple con exito. argumento del resolve. varios then
.catch(err => console.log(err));                     //catch: No se cumple con exito. argumento del reject
