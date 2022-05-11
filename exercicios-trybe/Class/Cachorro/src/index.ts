// fazendo tipagem utilizando interface 
interface Cachorro{
    _nome: string;
    _raca: string;
    _idade: number;
    resultado:number;
    calculoDeVidaDia():string;
    calculoDeVidaHoras():string;
}


class Cachorro {
    
    // construtor recebe parâmetro no momento de criar um objeto cachorro
    constructor(nome:string, raca:string, idade:number){
        this._nome = nome;
        this._raca= raca;
        this._idade = idade;
    }

    // métodos 

    calculoDeVidaDia():string{
        let resultado:number ;
        resultado=this._idade*365;
        return `O Cachorro ${this._nome} já viveu aproximadamente ${resultado} dia(s)`
    }

    calculoDeVidaHoras():string{
        let resultado:number;
        resultado=this._idade *365*24;
        return `O Cachorro ${this._nome} já viveu aproximadamente ${resultado} Hora(s)`
    }

}

const dogViraLata= new Cachorro('Like','Vira lata',10);
console.log(dogViraLata);
console.log(dogViraLata.calculoDeVidaDia());
console.log(dogViraLata.calculoDeVidaHoras());




