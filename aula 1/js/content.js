new Vue({
    el:"#app",
    data:{
        msg: "Seja bem-vindo!",
        nome: "Diego",
        link: "http://www.google.com.br"
    },
    methods:{
        escreveMsg(){
            return "<b>"+this.msg+"</b> - ("+this.nome+")";
        },
        mudarNome(e){
            console.log(e);
            this.nome = "João";
        }
    }
})