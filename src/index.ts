//Practica1

interface utlAlumno{
    nombre:string;
    edad:number;
    direccion:{
        calle:string;
        pais:string;
        estado:string;
        numero:number;
    }
}

const pruebaAlumno:utlAlumno={
    nombre:'Yoari',
    edad:21,
    direccion:{
        calle:'Lambda',
        pais:'Mexico',
        estado:'Guanajuato',
        numero:511,
    }
    function mostrarDireccion(nombres:nombre ,direccion.estado:direccion.estado,direccion.pais:direccion.pais): void{
        return this.nombres+ ', '+this.direccion.estado+', '+this.direccion.pais
    }
}

