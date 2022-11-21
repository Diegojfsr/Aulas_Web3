new Vue({
    el:"#app",
    data:{
        num1:0,
        num2:0,
        operacao:"+",
        resultado:0
    },
    methods:{
        capturaNum1(e){
            this.num1 = parseFloat(e.target.value);
            this.calcula();
        },
        capturaNum2(e){
            this.num2 = parseFloat(e.target.value);
            this.calcula();
        },
        buscaOp(e){
            this.operacao = e.target.value;
            this.calcula();
        },
        calcula(){
            switch (this.operacao){
                case "+":
                    this.resultado=this.num1+this.num2;
                break;
                case "-":
                    this.resultado=this.num1-this.num2;
                break;
                case "*":
                    this.resultado=this.num1*this.num2;
                break;
                case "/":
                    this.resultado=this.num1/this.num2;
                break;
            }
        }
    }
})