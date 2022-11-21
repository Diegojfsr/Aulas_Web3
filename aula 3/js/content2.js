new Vue({
    el: "#app",
    data:{
        tarefas: [],
        tarefa: ""
    },
    methods:{
        adicionarTarefa(){
            if(this.tarefa!=""){
                this.tarefas.push(this.tarefa);
                this.tarefa = "";
            }else{
                alert("Preencha o campo de tarefa");
            }
        }
    }
})