// import { calcularISV, Producto } from "./ejercicios/06-desestructuracion-funcion";

import { calcularISV, Producto } from "./06-desestructuracion-funcion";


console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {
        desc: 'celular',
        precio: 200
    },
    {
        desc: 'Televisor',
        precio: 2000
    }
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv)