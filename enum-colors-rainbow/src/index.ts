enum Rainbow{
    Red = 'Vermelho',
    Orange = 'Laranja',
    Yellow = 'Amarelo',
    Green = 'Verde',
    Blue = 'Azul',
    Indigo = 'Anil',
    Violet = 'Violeta',
}


function checkColorRainbowDigit(color:string){

if(color === Rainbow.Red){
console.log(`Cor digitada foi ${Rainbow.Red}`);
}else if (color === Rainbow.Orange){
    console.log(`Cor digitada foi ${Rainbow.Orange}`);
}else if(color === Rainbow.Yellow){
    console.log(`Cor digitada foi ${Rainbow.Yellow}`);
}else if (color === Rainbow.Green){
    console.log(`Cor digitada foi ${Rainbow.Green}`);
}else if (color === Rainbow.Blue){
    console.log(`Cor digitada foi ${Rainbow.Blue}`);
}else if (color === Rainbow.Indigo){
    console.log(`Cor digitada foi ${Rainbow.Indigo}`);
}else if (color === Rainbow.Violet){
    console.log(`Cor digitada foi ${Rainbow.Violet}`);
}else{
    console.log(`Nome digitado não condiz com as cores do arco-ires ${color}`);
}

}

checkColorRainbowDigit('Vermelho');