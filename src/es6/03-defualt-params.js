function newUser(name, age, country){
    var name = name || 'David';
    var age = age || 27;
    var country = country || 'Mx';
    console.log(name, age, country);
}

newUser('Malva',16,'CL');
newUser('Luis',24);
newUser('Eduardo');
newUser();

function newAdmin(name = 'Silvio', age = 77, country = 'CL'){
    console.log(name, age, country);
}

newAdmin('Luis',22,'ES');
newAdmin('David',27);
newAdmin('Eduardo');
newAdmin();
