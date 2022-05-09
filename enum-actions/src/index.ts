enum Actions {
    Save = 'Salvar Arquivo',
    Print = 'Printar Arquivo na Tela',
    Open = 'Abrir Arquivo',
    View = 'Previsualização do Arquivo',
    Close = 'Fechar Arquivo',
}


function actionsFiles(action: string) {

    if (action === Actions.Save) {
        console.log('Arquivo Salvo com Sucesso');

    } else if (action === Actions.Print) {
        console.log('Arquivo Printado na Tela');

    } else if (action === Actions.Open) {
        console.log('Arquivo Aberto com Sucesso!!!');

    } else if (action === Actions.View) {
        console.log('Previzualização executada ');

    } else if (action === Actions.Close) {
        console.log('Arquivo Fechado e Criptografado');

    } else {
        console.log('Ação inválida');

    }

}

actionsFiles('Salvar Arquivo')