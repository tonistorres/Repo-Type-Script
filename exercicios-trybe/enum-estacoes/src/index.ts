import * as Clima from './enum-clima';



function ckeckClima(clima:string){

    if(
           clima === 'Outono'
        || clima === 'Inverno'
        || clima ===  'Primavera'
        || clima === 'Verão'
        
        ){

            console.log(`O clima checado foi ${clima}`);
            
    }else{
        console.log(`A string passada ${clima}, não condiz com a esperada pela função`);
    }
}

ckeckClima(Clima.Seasons.OUTONO);