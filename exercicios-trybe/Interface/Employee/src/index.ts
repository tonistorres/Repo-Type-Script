// interface Employee
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// tenho uma variável employee que implementa uma interface Employee
let employee: Employee = {
    firstName : "John",
    lastName: "Doe",
    fullName(): string {
        return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
    }
}

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"
console.log(employee.firstName='Tonis');
console.log(employee.lastName='Ferreira');
console.log(employee.fullName());

