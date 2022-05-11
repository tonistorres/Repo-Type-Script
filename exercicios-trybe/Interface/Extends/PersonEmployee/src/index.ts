// interface Person
interface Person{
    first:string;
    lastName:string;
    age:number;
    fullName():string;
}


// interface Employee aqui inicia o conceito de herança
interface Employee extends Person{
    first:string;
    lastName:string;
    age:number;
    fullName():string;
    sayHello():string;
}


// criando uma variável do tipo Employee nesse contexto 

let employee:Employee = {
first:'Tonis',
lastName:'Ferreira',
age:41,

fullName():string{
    let result:string;
    result = `Nome Completo ${this.first} ${this.lastName}`
    return result;
},

sayHello():string{
let result;
result=`Olá !! Tenha um Bom dia de Trabalho!!`
return result;
}

}