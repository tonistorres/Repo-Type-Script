"use strict";
class Cachorro {
    // construtor recebe parâmetro no momento de criar um objeto cachorro
    constructor(nome, raca, idade) {
        this._nome = nome;
        this._raca = raca;
        this._idade = idade;
    }
    // métodos 
    calculoDeVidaDia() {
        let resultado;
        resultado = this._idade * 365;
        return `O Cachorro ${this._nome} já viveu aproximadamente ${resultado} dia(s)`;
    }
    calculoDeVidaHoras() {
        let resultado;
        resultado = this._idade * 365 * 24;
        return `O Cachorro ${this._nome} já viveu aproximadamente ${resultado} Hora(s)`;
    }
}
const dogViraLata = new Cachorro('Like', 'Vira lata', 10);
console.log(dogViraLata);
console.log(dogViraLata.calculoDeVidaDia());
console.log(dogViraLata.calculoDeVidaHoras());
