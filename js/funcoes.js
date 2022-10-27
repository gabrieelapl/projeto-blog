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
    for(i=0;i<=2;i++){
        document.write(
        "<tr>" +
        "<td>"+ x[i].getAttribute("codigo") +"</td>" +
        "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"' width='150'></td>" +
        "<td>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>" +
        "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) +"...</td>" +
        "</tr>");
    }
}