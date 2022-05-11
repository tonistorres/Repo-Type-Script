interface Casa {
    _proprietario: string;
    _iptu: number;
    _endereco: Endereco;
    calculoIPTU():string;
}

type Endereco = {
    _rua: string;
    _ncasa: number;
    _complemento: string;
}


class Casa {


    constructor(proprietario: string, iptu: number, endereco: { _rua: string, _ncasa: number, _complemento: string }) {
        this._proprietario = proprietario;
        this._iptu = iptu;
        this._endereco = endereco;
    }

    calculoIPTU():string{
        let result:number;
        result=this._iptu * 10*78.5;
        return `Aqui um calculo ficticio IPTU ${result}`
    }


}

const casaTonis = new Casa('Tonis Torres',50,{_rua:'Dico Veiga', _ncasa:35,_complemento:''});

console.log(casaTonis);
console.log(casaTonis.calculoIPTU());
