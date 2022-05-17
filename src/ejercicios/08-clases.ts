

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }


}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'new york, USA')
        // this.alterEgo = alterEgo
    }
}

const batman = new Heroe('Batman', 50, 'Bruce');

console.log(batman)