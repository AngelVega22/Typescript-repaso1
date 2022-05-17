

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    año: number
}

const reproductor: Reproductor = {
    volumen: 80,
    segundo: 34,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        año: 2015
    }
}

// const autor = 'Angel'

// const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
const { volumen: vol, segundo, cancion, detalles } = reproductor;

const { autor } = detalles




// console.log('El Volumen actual es de: ', vol)
// console.log('El Segundo actual es de: ', segundo)
// console.log('El Canción actual es de: ', cancion)
// console.log('El Autor es : ', autor)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz

console.log('Personaje 1:', p3)
// console.log('Personaje 2:', p1)
// console.log('Personaje 3:', p2)
