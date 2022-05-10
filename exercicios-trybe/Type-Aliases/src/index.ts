import * as Aliases from './aliases-point';
import * as Bird from './type-bird';
import * as Sum from './type-soma';
import * as Endereco from './type-endereco';


function printCoord(pt: Aliases.Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });


function birdType(tp: Bird.typeBird) {
  console.log(`Nome do Pássaro ${tp.name}, comprimento do Pássaro: ${tp.heigth}cm`);

}

birdType({ name: 'Pica-Pau', heigth: 12 })


function sumTwoValue(tp: Sum.typeSum) {
  return tp.a + tp.b;
}

console.log(sumTwoValue({ a: 10, b: 20 }));

function imprimeEndereco(tp: Endereco.typeEndereco) {
  console.log('-------------------');
  console.log('Imprimindo Endereço');
  console.log('-------------------');
  if (!tp.complemento) {
    tp.complemento = 'Parametro Opicional';
    console.log(`Rua: ${tp.rua} Casa:${tp.casa} Complemento ${tp.complemento}`);
  }
  console.log(`Rua: ${tp.rua} Casa:${tp.casa} Complemento ${tp.complemento}`);
}

imprimeEndereco({ rua: 'Dico Veiga', casa: 35 })