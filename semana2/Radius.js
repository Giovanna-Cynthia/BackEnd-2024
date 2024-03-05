const reqEntrada = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fctCalcDiametro(radius){
    return radius * 2;
}
const fctCalcVolume = (radius) => {
    let calculo;
    calculo = ((4/3) * Math.PI) * (Math.pow(radius,3));
    return calculo;
}
reqEntrada.question("Qual o valor do raio que deseja usar para calcular?", raio => {
    let msgErro = "É necessário definir o valor número para poder efetuar os calculos";
if(!raio){
    console.log(msgErro);
}else{
    if (isNaN(raio)){
        console.log(msgErro);
    }else{
        console.log( ` O diametro da esfera de raio ${raio} é ${fctCalcDiametro(raio)}, feito usando a função javaScript padrão.`
        );
        console.log(`O volume de uma esfera de raio ${raio} é ${fctCalcVolume(raio)}, feito usando a arrow functions que é uma simplificação para funções de expressões`);
    }
}
reqEntrada.close();
})

