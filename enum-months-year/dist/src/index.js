"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkMonths(mes) {
    if (mes === 'Janeiro'
        || mes === 'Fevereiro'
        || mes === 'Março'
        || mes === 'Abril'
        || mes === 'Maio'
        || mes === 'Junho'
        || mes === 'Julho'
        || mes === 'Agosto'
        || mes === 'Setembro'
        || mes === 'Outubro'
        || mes === 'Novembro'
        || mes === 'Dezembro') {
        console.log(`O mês recebido no parâmetro a função foi ${mes}`);
    }
    else {
        console.log(`A string digitada ${mes}, não corresponde ao mês do ano esperado pela função`);
    }
}
checkMonths('Dezembro');
