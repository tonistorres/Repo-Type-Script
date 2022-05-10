// Função recebe um nome e imprime olá e o nome recebido na tela 
export function greeter(name: string) {
    return `Olá ${name}!`;
}


// Função mostra no nome da pessoa e a idade na tela 

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}


// A função add recebe dois numeros e efetua a soma retornando um número 
export function add(x: number, y: number): number {
    return x + y;
}

// a função sumArray recebe um array efetua a soma dos valores contidos no array
// por meio da hof reduce e em seguida retorna uma número para usuário
export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

// calcular a árrea do triângulo
export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}


// calcular a área de um quadrado
export function square(side: number): number {
    return side ** 2;
}


// calcular a área do retângulo
export function rectangle(base: number, height: number): number {
    return base * height;
}