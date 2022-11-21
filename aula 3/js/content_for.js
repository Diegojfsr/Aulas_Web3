new Vue({
    el: "#app",
    data:{
        cores : [],
        produtos: [{nome: "Notebook", valor: 5000},
                    {nome: "Mouse", valor: 59.9}],
        item: ""
    },
    methods:{
        adicionarCor(){
            this.cores.unshift(this.item);
            this.item = "";
        }
    }
})