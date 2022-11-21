var bthd = document.querySelector("#hd2");
bthd.addEventListener("click", function(){
    var spanhd = document.querySelector("#hd");
    spanhd.innerHTML = '<br><br><label>HD</label><br><label>';
    spanhd.innerHTML += '<input type="radio" name="hd2" value="294.99" class="hd">HD 1TB</label><br>';
    spanhd.innerHTML += '<label><input type="radio" name="hd2" value="205.98" class="hd">';
    spanhd.innerHTML += 'HD SSD 480GB</label><br>';
    this.setAttribute("disabled", "true");
});

function ativa(){
    var btconc = document.querySelector("#btConcluir");
    btconc.removeAttribute("disabled");
    var divTotal = document.querySelector("#divTotal");
    divTotal.setAttribute("class", "total invisible");
}

function buscaItem(item){
    let total=0;
    for(var i=0; i<item.length; i++){
        if(item[i].checked){
            total += parseFloat(item[i].value);
        }
        item[i].addEventListener("click", ativa);
    }
    return total;
}

var btconc = document.querySelector("#btConcluir");
btconc.addEventListener("click", function(){
    var fonte = document.querySelectorAll(".fonte");
    var hd = document.querySelectorAll(".hd");
    var processador = document.querySelectorAll(".processador");
    var video = document.querySelectorAll(".video");
    var total = 0;
    
    //console.log(fonte);
    total += buscaItem(fonte);
    total += buscaItem(hd);
    total += buscaItem(processador);
    total += buscaItem(video);
    console.log(total);

    var divTotal = document.querySelector("#divTotal");
    divTotal.textContent = "R$ "+total.toFixed(2).replace(".", ",");
    divTotal.setAttribute("class", "total");

    this.setAttribute("disabled", "true");
});