

console.log('Hola Mundo!!');

/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www..."
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'abd123'

    imprimir() {
        console.log('hola')
    }
}


console.log(MiSuperClase)


const miClase = new MiSuperClase()

console.log(miClase.miPropiedad)