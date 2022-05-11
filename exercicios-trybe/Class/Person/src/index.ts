import * as Persons from './classPerson';


const person1 = new Persons.MoldeDePessoa("Jane Doe", new Date("1986-01-01"), Persons.EyeColor.Brown);
// const person2 = new Persons.MoldeDePessoa('Tonis Torres', new Date('1979-11-21'), Persons.EyeColor.Black)
console.log(person1);
// console.log(person2);
console.log(person1.speak(), person1.eat(), person1.walk());
// console.log(person2.eat());




