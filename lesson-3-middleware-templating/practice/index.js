const fakeDB = require('./fakeDB');

const Dog = fakeDB();

console.log(Dog.all('dogs'))


Storage.add({'todos', [...Storage.get('todos'), {name: 'Buy milk'}]})
