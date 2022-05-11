"use strict";
let employee = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
    }
};
// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"
console.log(employee.firstName = 'Tonis');
console.log(employee.lastName = 'Ferreira');
console.log(employee.fullName());
