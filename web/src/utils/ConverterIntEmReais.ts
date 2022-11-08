export function converterIntEmReais(valorInt: number){
valorInt = valorInt * 0.01

const valorReal = valorInt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
 
return valorReal;
}