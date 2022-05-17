

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b)
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = sumar(11, 34);


// const resultado = multiplicar(15, 0, 50);


// console.log(resultado)


interface PersonajeDC {
    nombre: string;
    pv: number;
    mostrarHp: () => void;

}

function curar(personaje: PersonajeDC, curarX: number): void {

    personaje.pv += curarX;

    // console.log(personaje);

}

const nuevoPersonaje: PersonajeDC = {
    nombre: 'Batman',
    pv: 90,
    mostrarHp() {
        console.log('Puntos de vida', this.pv)
    }
}

curar(nuevoPersonaje, 10);

nuevoPersonaje.mostrarHp();
