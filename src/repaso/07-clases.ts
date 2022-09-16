
//Class

import { convertCompilerOptionsFromJson } from "typescript";

class Persona{
    nombre:string;
    edad:number;

    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }

    imprimir():void{
        console.log(`Nombre: ${this.nombre}`);
    }
}

let persona1:Persona;
persona1=new Persona('Dario',22);

let persona2=new Persona('Laura',20);

persona1.nombre='Yoari';
persona1.edad=21;
persona1.imprimir();
persona2.imprimir();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Le a tocado el valor: ${this.valor}`);
    }
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
