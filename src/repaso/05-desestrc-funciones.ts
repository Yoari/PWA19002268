
interface producto{
    desc:string;
    precio:number;
}

const telefono : producto={
    desc :'Nokia',
    precio:1200
}
const tablet : producto={
    desc: 'Ipad Air',
    precio:20500
}

function calcularIva(productos:producto[]):number{
    let total = 0;
    productos.forEach((Productos)=>{
        total+=Productos.precio;
    })
    return total*.16;
}

const articulos1=[telefono,tablet];
const totIva=calcularIva(articulos1);
console.log('El total + IVA : ', totIva);

function calcularIVA(productos:producto[]):[number,number]{
    let total=0
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total,total*.16];
}

const articulos=[tablet,telefono];
const [total,iva]=calcularIVA(articulos);
console.log('Total: ', total);
console.log('Total + IVA: ', iva);

