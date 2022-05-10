
const PI:number = 3.14;

export function losango(D:number, d:number):number{
return (D * d) / 2;
} 

export function trapezio(B:number, b:number, h:number):number{
return ((B + b) * h);
}

export function circulo( r:number){
return (PI* (r*r))
}