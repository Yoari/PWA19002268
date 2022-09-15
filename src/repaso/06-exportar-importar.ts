
import { calcularIVA, producto } from "./05-desestrc-funciones";

const carrito:producto[]=[
    {
        desc: 'Telefono1',
        precio:1270
    },
    {
        desc: 'Telefono2',
        precio: 1270
    }
];

const [total,iva]=calcularIVA(carrito);
console.log('Total: ', total);
console.log('Total + IVA: ',iva);
