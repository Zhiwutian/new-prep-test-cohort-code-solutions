const person = {
  firstName: 'Lato',
  lastName: 'Atreides',
  hobby: 'path building'
};

console.log('person', person);

const fullName = person.firstName + ' ' + person.lastName;

console.log(fullName);

person.job = 'God Emperor';
console.log(person.job);

person['previousJob'] = 'Abomination';

console.log('Person updated', person);
