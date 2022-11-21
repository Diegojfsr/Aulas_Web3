//Escrevendo na página
document.write("Bem vindo!");

//Escreve no console
console.log("IF Sudeste MG");

//Alerta
alert(document.getElementById("msg").textContent);

document.querySelector("h1").textContent = "GTI";
document.querySelector("h1").innerText = "GTI";

var n1 = parseFloat(document.querySelector(".nota1").textContent);
var n2 = parseFloat(document.querySelector(".nota2").textContent);
var media = (n1+n2)/2;
document.querySelector(".media").textContent = media;
