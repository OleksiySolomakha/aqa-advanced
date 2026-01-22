const person = {
	firstName: 'Name',
	lastName: 'Last',
	age: 11,
};

console.log('Srart person object is:', person);

person.email = 'lastname@mail.com';

console.log('object person after adding email:', person);

delete person.age;

console.log('object person after deleting email:', person);
