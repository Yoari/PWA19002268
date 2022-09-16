//Practica 2
//Formula general

class FG{
    private a:number;
    private b:number;
    private c:number;
    private r1:number;
    private r2:number;
    private r3:number;


    constructor(){

    }

    private op1(){
        this.r1=(-this.b-(Math.sqrt((this.b*this.b)-(4*this.a*this.c))));
    }
    private op2(){
        this.r2=2*this.a;        
    }
    private op3(){
        this.r3=this.r1/this.r2;
    }
    public imprimir(){
        console.log(`El resultado es: ${this.r3}`);
    }
}

let FG1=new FG();

FG1.imprimir();

