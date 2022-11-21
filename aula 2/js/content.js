new Vue({
    el:"#app",
    data:{
        nome:"",
        operacao:"soma"
    },
    methods:{
        capturaNome(e){
            this.nome = e.target.value;
        },
        contar(e){
            alert(this.nome.length);
        }
    }
})