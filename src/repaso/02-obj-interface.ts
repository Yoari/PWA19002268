
// objetos 

let amaterno:string | number;

amaterno='gonzález';
amaterno=100;

let mascotas=['perro','gato',100,true];

let tem2:(boolean|number|string)[]=['rata',100];

tem2.push(200);

let acciones : string[]=['dormir','comer', 'volar'];

interface Alumno{
    matricula:number|string;
    nombre3:string;
    apaterno2:string;
    acciones?:string[];
    email:string;
}

const alumno:Alumno = {
    matricula:1234,
    nombre3:'Yoari',
    apaterno2: "Gomez" ,
    email:'yoari.gomez@gmail.com'
}

alumno.nombre3 = 'Dario';

console.table(alumno);

