new Vue({
    el: "#app",
    data: {
        logado: false,
        nome: "",
        anonimo: false,
        rotulo: "Entrar"
    },
    methods:{
        entrar(){
            this.logado = !this.logado;
            //this.rotulo = this.logado ? "Sair" : "Entrar";
            if(this.logado){
                this.rotulo = "Sair";
            }else{
                this.rotulo = "Entrar";
            }
        }
    }

})