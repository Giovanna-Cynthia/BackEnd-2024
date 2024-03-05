const reqEntrada = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});

reqEntrada.question(`Qual o seu nome?`, strNome =>{
    console.log("Oi, %s", strNome.toUpperCase());

    reqEntrada.question('Qual é a sua idade?', (idade) => {
        const intIdade = parseInt(idade);
        if(isNaN(intIdade)){
            console.log('Por favor, insira um número válido.');
        } else{
            let intAnoAtual = new Date().getFullYear();
            let intAnoNascimento = intAnoAtual - intIdade;
            console.log(`Você nasceu em ${intAnoNascimento}.`);
        }
        reqEntrada.close();
        });
});

