

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/


function queTipoSoy<T>(arg: T) {
    return arg
}

let soyString = queTipoSoy('hola');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 'a', 'b']);

let soyExplicito = queTipoSoy<number>(70)