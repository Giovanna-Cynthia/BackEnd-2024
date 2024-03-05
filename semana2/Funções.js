const { Console } = require('console');

/*fuction define que o nome atribuido sera uma função (function nome()) 
função sem parametros, sem necssidade de valores dentro do parentese
os sinais {...} define a rotina da função
*/
function fctTexto(){
    let intV1 = 50;
    let intV2 = 40;
    let intV3 = intV1 + intV2;
    let strNome = "Giovanna";

    console.log ("Olá %s, o resultado da operação foi: %d", strNome, intV3);
}
fctTexto();


const fctMensagem = () => {
    let nome = "Renato";
    console.log("Tenha um excelente dia, %s", nome);
}

function fctCalculo(a,b){
    let intDif = 0;
    let intResult = a+b;

    if(a > b){
        intDif = a-b;
    }else{
        intDif = b-a;
    }
    for(let i = 1; i <= intDif; i++){
        intResult *= i;
    }
    return intResult;
}
fctMensagem();


const fctFibonacci = (intValor) => {
    let intTermo = intValor;
    let intPenultimo = 0;
    let intUltimo = 1;
    let intNumero = 0;
    let intCount = 3;
    while(intCount <= intTermo){
        intNumero = intUltimo + intPenultimo;
        intPenultimo = intUltimo;
        intUltimo = intNumero;
        intCount++;
    }
    return intNumero; 
}
console.log(fctCalculo(14,8));
let calc = fctCalculo(21,6);
console.log(calc);



