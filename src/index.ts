
interface Detalles{
    autor:string;
    anio:number;
}

interface reproducir{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'Mañanitas'
    detalles:{
        autor:'Cepillin',
        anio:1900,
    }
}
