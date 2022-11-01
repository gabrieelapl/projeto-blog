//Cria uma variável para manipular um arquivo XML
xmlhttp = new XMLHttpRequest();
//Lê um determinado arquivo XML no diretório do projeto
xmlhttp.open("GET","xml/conteudo.xml",false);
//Envia o arquivo aberto para leitura
xmlhttp.send();
//Envia uma resposta do tipo XML
xmlDoc = xmlhttp.responseXML;
//Cria um array a partir da quantidade de postagens
x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo(){
    for(i=x.length-1;i>=0;i--){
        document.write(
        "<tr>" +
        "<td>"+ x[i].getAttribute("codigo") +"</td>" +
        "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"' width='150'></td>" +
        "<td><a href='postagem.html?codigo_postagem="+ i +"'>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</a></td>" +
        "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) +"...</td>" +
        "</tr>");
    }
}

function funcaoPostagem(){
    //Armazenar a URL completa, ex: http://127.0.0.1/projeto-blog/postagem.html?codigo_postagem=1
    url = new URL(window.location.href);
    //Armazenar somente o parâmetro da URL, ex: codigo_postagem=1
    parametro = url.searchParams;
    //Armazenar somente o valor do parâmetro da URL, ex: 1
    i = parametro.get("codigo_postagem");
    
        document.write(
        "<tr>" +
        "<td>"+ x[i].getAttribute("codigo") +"</td>" +
        "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"' width='150'></td>" +
        "<td>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>" +
        "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</td>" +
        "</tr>");
}