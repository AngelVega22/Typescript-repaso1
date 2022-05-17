

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Angel'
}

const pasajero2: Pasajero = {
    nombre: 'Juan',
    hijos: ['Mario', 'Juinca']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0
    console.log(cuantosHijos)
}

imprimeHijos(pasajero1)