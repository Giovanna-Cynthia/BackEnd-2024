console.log("Inicio da Criação do Servidor com parâmetro de acesso para página html...");

const http = require('http');
const fs = require('fs');

const fileOpen = (response, arquivo) => {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    fs.readFile(__dirname + "/View/" + arquivo + ".html", function (err, data) {
        if (err) {
            console.log("Erro ao ler arquivo");
            response.end("Erro ao ler arquivo");
            return;
        }

        response.write(data);
        response.end();
    });
};

const myServer = http.createServer((request, response) => {
    var page = request.url;

    switch (page) {
        case "/d1":
            fileOpen(response, "index");
            break;
        case "/d2":
            fileOpen(response);
            response.write('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yvCAX68TJMc?si=Uxlr2rMp7grqf3MW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
            break;
        case "/d3":
            fs.createReadStream(__dirname + "/View/codigos.png").pipe(response);
            break;
        case "/d4":
            fileOpen(response, "form");
            break;
        default:
            response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            response.write('<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">');
            response.write('<h1 style=" font-family: fantasy; color: red; font-size: 30px; text-align: center;">Erro ao acessar a opção</h1>');
            response.write('</div>');
            response.end();
            break;
    }
});

myServer.listen(3000, () => {
    console.log('Servidor de WEB no endereço http://127.0.0.1:3000/');
});