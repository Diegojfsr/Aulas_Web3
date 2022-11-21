//array
var esportes = ['golf', 'tenis', 'futebol'];
document.writeln(esportes[1]);
document.write('<br>');

var jogadores = {'golf': 2, 'tenis': 2, 'futebol':22};
document.writeln(jogadores['futebol']);
document.write("<br>");

esportes.push('vôlei');

//iteração do vetor
esportes.sort().forEach(exibir);

function exibir(element, index, array){
    document.write(element);
    document.write("<br>");
}

//Capturando os valores
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
//console.log(n1);
document.write(n1+n2);