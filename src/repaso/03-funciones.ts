//manejo de funciones

function nombres(){
    console.log('nombre');
}

function sumar (num1:number, num2:number):number{
    return num1+num2;
}

//console.log(sumar(10,3));

function restar (num1:number,num2:number,num3?:number):number{
    if (num3){
        return num1-num2-num3;
    }
    else{
        return num1-num2;
    }
}
//function sumarFlecha (a:number,b:number):number=>{
//    return a+b;
//}

//console.log(restar(10,5));
//console.log(restar(10,5,2));

interface escuelaAlumno{
    nombre:string;
    email?:string;
    edad:number;
    saludar:()=>void;
}

function alumnoUTL(alumno:escuelaAlumno,calificar:number):void{
    
    alumno.nombre='Yoari';
    alumno.email='yoari.gomez06@gmail.com'
    alumno.edad=calificar;

}

const nuevoAlumno:escuelaAlumno={
    nombre:'Dario',
    edad: 45,
    saludar(){
        console.log("hola Mundo!!!")
    },
}
