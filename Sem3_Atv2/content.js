//<tr><td><input type="checkbox"></td><td>Arroz</td><td>R$ 23,50</td></tr>

var bt = document.querySelector("#btAdd");
bt.addEventListener("click", function(){
    var prod = document.querySelector("#prod");
    var qtd = document.querySelector("#qtd");
    var tab = document.querySelector("#itens");
    var linha = document.createElement("tr");
    var coluna = document.createElement("td");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    coluna.appendChild(checkbox);
    linha.appendChild(coluna);
    //Produto
    coluna = document.createElement("td");
    coluna.textContent = prod.value;
    linha.appendChild(coluna);
    //Quantidade
    coluna = document.createElement("td");
    coluna.textContent = qtd.value;
    linha.appendChild(coluna);
    //Botão Apagar
    var btA = document.createElement("button");
    btA.textContent = "X";
    btA.addEventListener("click", function(){
        this.parentElement.parentElement.remove();
    });
    coluna = document.createElement("td");
    coluna.appendChild(btA);
    linha.appendChild(coluna);
    //Adicionando a linha na tabela
    tab.appendChild(linha);
    //Limpar campos
    prod.value="";
    qtd.value="";
});