var strNome = "Giovanna";

let strFrase = "Estou estudando no node.js...";

//verifica a diferença entre var e let
if (strFrase.length > 3){
    var strVar = "Variável Val";
    let strLet = "Variável Let";


    // Imprime no terminal as variaveis definidas
    console.log(strVar, strLet);
}

console.log(strVar);

const strConstante = "Somente eu";
console.log(strConstante);

//Para definir variavel do tipo numero=ico inteiro
let intValor1 = 10;
let intValor2 = 4;

// Variavel do tipo operação numerica
let intCalculo = intValor1 * intValor2;

//definir array com numeros
let arrValores = [0,5,10,15,17,19,25,27];

//definir array com textp
let arrItens = ["Rua", "Alameda", "Avenida"];

//Inserir dados em variavel array
arrItens.push("Praça");
arrItens.push("Lote");

//imprimir variaveis no console do terminal
console.log(intCalculo, arrValores, arrItens);

console.log(strFrase + "" + strNome);
console.log(strFrase.concat(" ", strNome));

console.log("Imprimir operação matemática");
console.log(intValor1 + intValor2);
console.log(intValor1 - intValor2);
console.log(intValor1 * intValor2);
console.log(intValor1 / intValor2);

console.log("Imprimir array");
console.log(arrItens);

//excluir o primeiro item na variavel array
arrItens.shift();
console.log(arrItens);

//excluir ultimo item na variavel array
arrItens.pop();
console.log(arrItens);

//retorna o valor do index da variavel array definido pelo item
let index = arrItens.indexOf("Avenida");
console.log(index);

if (index > -1){
    //excluir um item especifico na variavel array
    arrItens.splice(index, 1);
}
console.log(arrItens);

//utilizar FOR (comando de repetição) para fazer a leitura da variavel do tipo array
for(let i=0; arrItens.length>i; i++){
    console.log(i);
    console.log(arrItens[i]);
}

// utilizar WHILE (comando de repetição) para fazer leitura da variavel do tipo array
// %d valor numerico
let w = 0;
while (w < arrItens.length){
    console.log("Valor do Index: %d e valor dos valores: %d",w, arrValores[w]);
    w++;
}


// variavel.map - usado para mapear o array de forma direta
arrItens.map((element, index) => (console.log(`Valor do index: ${index} e valor do item: ${element}`)));
arrValores.map((element, index) => (console.log(`Valor do index: ${index} e valor do item: ${element}`)));

// variavel.filter - filtra os elementos do array e mostra somente os elementos que satisfaçam a condição
let newItens = arrItens.filter(n => n != "Lote")
console.log(`Valor do Item: ${newItens}`);
let newValor = arrValores.filter(n => n > 5);
console.log(`Valor do item: ${newValor}`);

// variavel.reduce - faz a leitura de todos os elementos da array e mostra o valor acumulado
newItens = arrItens.reduce((todosItens, i) => todosItens + 1)
console.log(`valor do item: ${newItens}`);

newValor = arrValores.reduce((valorAcumulado, n) => valorAcumulado + n)
console.log(`valor do item: ${newValor}`);

newValor = arrValores.reduce((valorAcumulado, n) => (valorAcumulado + n) * 3)
console.log(`valor do item: ${newValor}`);

