const user = {
    username: 'Eduardo',
    age: 27,
    country: 'MX'
}
const {username, ...values} = user;
console.log(username);
console.log(values);
