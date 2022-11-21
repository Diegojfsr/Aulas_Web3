new Vue({
    el: "#app",
    data:{
        nome:"Diego",
        idade:34,
        imagem:"vue.png",
        mostrar:"display:block"
    },
    methods:{
        mostraElementos(e){
            mostrar="display:none";
        }
    }
})