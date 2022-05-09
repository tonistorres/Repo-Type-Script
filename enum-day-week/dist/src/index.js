"use strict";
var dayWeek;
(function (dayWeek) {
    dayWeek[dayWeek["domingo"] = 1] = "domingo";
    dayWeek[dayWeek["segunda"] = 2] = "segunda";
    dayWeek[dayWeek["terca"] = 3] = "terca";
    dayWeek[dayWeek["quarta"] = 4] = "quarta";
    dayWeek[dayWeek["quinta"] = 5] = "quinta";
    dayWeek[dayWeek["sexta"] = 6] = "sexta";
    dayWeek[dayWeek["sabado"] = 7] = "sabado";
})(dayWeek || (dayWeek = {}));
function checkWeek(day) {
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
