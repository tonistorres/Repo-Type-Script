"use strict";
class Casa {
    constructor(proprietario, iptu, endereco) {
        this._proprietario = proprietario;
        this._iptu = iptu;
        this._endereco = endereco;
    }
    calculoIPTU() {
        let result;
        result = this._iptu * 10 * 78.5;
        return `Aqui um calculo ficticio IPTU ${result}`;
    }
}
const casaTonis = new Casa('Tonis Torres', 50, { _rua: 'Dico Veiga', _ncasa: 35, _complemento: '' });
console.log(casaTonis);
console.log(casaTonis.calculoIPTU());
