

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;

}

const telefono: Producto = {
    desc: 'iPad',
    precio: 100
}
const Tablet: Producto = {
    desc: 'Nokia A2',
    precio: 100
}

export function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio
    })
    return [total, total * 0.18];
}

const articulos = [telefono, Tablet];

const [total, isv] = calcularISV(articulos);

// console.log('TOTAL:', total)

// console.log('ISV:', isv)