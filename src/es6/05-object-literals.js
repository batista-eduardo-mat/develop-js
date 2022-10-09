// enahced object literals

function newUser(user, age, country, uId){
    //return Object
    // return {
    //     user: user,
    //     age: age,
    //     country: country,
    // }

    //Podemos pasar los atributos que no cambian
    //de la misma manera
    return {
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser('Eduardo',27,'Mx',1));