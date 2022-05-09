"use strict";
var Actions;
(function (Actions) {
    Actions["Save"] = "Salvar Arquivo";
    Actions["Print"] = "Printar Arquivo na Tela";
    Actions["Open"] = "Abrir Arquivo";
    Actions["View"] = "Previsualiza\u00E7\u00E3o do Arquivo";
    Actions["Close"] = "Fechar Arquivo";
})(Actions || (Actions = {}));
function actionsFiles(action) {
    if (action === Actions.Save) {
        console.log('Arquivo Salvo com Sucesso');
    }
    else if (action === Actions.Print) {
        console.log('Arquivo Printado na Tela');
    }
    else if (action === Actions.Open) {
        console.log('Arquivo Aberto com Sucesso!!!');
    }
    else if (action === Actions.View) {
        console.log('Previzualização executada ');
    }
    else if (action === Actions.Close) {
        console.log('Arquivo Fechado e Criptografado');
    }
    else {
        console.log('Ação inválida');
    }
}
actionsFiles('Salvar Arquivo');
