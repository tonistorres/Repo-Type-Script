enum dayWeek {
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}


function checkWeek(day: number) {
    switch (day) {
        case dayWeek.domingo:
            console.log('O dia Setado é Domingo');
            break;

        case dayWeek.segunda:
            console.log('O dia Setado é Segunda-Feira');
            break;

        case dayWeek.terca:
            console.log('O dia Setado é Terca-Feira');
            break;


        case dayWeek.quarta:
            console.log('O dia Setado é Quarta-Feira');
            break;

        case dayWeek.quinta:
            console.log('O dia Setado é Quinta-Feira');
            break;

        case dayWeek.sexta:
            console.log('O dia Setado é Sexta-Feira');
            break;

        case dayWeek.sabado:
            console.log('O dia Setado é Sábado');
            break;

        default:
            console.log('O valor setado não condiz como o valor esperado pela funcao');
            break;
    }

}


checkWeek(10);