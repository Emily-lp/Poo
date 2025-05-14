class Persona {
    nombre: string;
    apellidos: string;
    numeroCedula: string;
    estadoCivil: string;

    constructor(nombres: string, apellidos: string, numeroCedula: string, estadoCivil: string) {
        this.nombre = nombres;
        this.apellidos = apellidos;
        this.numeroCedula = numeroCedula;
        this.estadoCivil = estadoCivil;
    }

    cambiarEstadoCivil(nuevoEstadoCivil: string) {
        this.estadoCivil = nuevoEstadoCivil;
    }

    imprimirInformacion(): string {
        return `Nombre: ${this.nombre} ${this.apellidos}\nCédula: ${this.numeroCedula}\nEstado Civil: ${this.estadoCivil}`;
    }
}

class Estudiante extends Persona {
    curso: string;

    constructor(nombres: string, apellidos: string, numeroCedula: string, estadoCivil: string) {
        super(nombres, apellidos, numeroCedula, estadoCivil);
        this.curso = "";
    }

    matricular(curso: string) {
        this.curso = curso;
    }
}

class Empleado extends Persona {
    añoIncorporacion: number;
    numeroDespacho: number;

    constructor(nombres: string, apellidos: string, numeroCedula: string, estadoCivil: string, añoIncorporacion: number, numeroDespacho: number) {
        super(nombres, apellidos, numeroCedula, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }

    reasignarDespacho(nuevoDespacho: number) {
        this.numeroDespacho = nuevoDespacho;
    }
}

class Profesor extends Empleado {
    departamento: string;

    constructor(nombres: string, apellidos: string, numeroCedula: string, estadoCivil: string, añoIncorporacion: number, numeroDespacho: number, departamento: string) {
        super(nombres, apellidos, numeroCedula, estadoCivil, añoIncorporacion, numeroDespacho);
        this.departamento = departamento;
    }

    cambiarDepartamento(nuevoDepartamento: string) {
        this.departamento = nuevoDepartamento;
    }
}

class PersonalServicio extends Empleado {
    seccion: string;

    constructor(nombres: string, apellidos: string, numeroCedula: string, estadoCivil: string, añoIncorporacion: number, numeroDespacho: number, seccion: string) {
        super(nombres, apellidos, numeroCedula, estadoCivil, añoIncorporacion, numeroDespacho);
        this.seccion = seccion;
    }

    trasladarSeccion(nuevaSeccion: string) {
        this.seccion = nuevaSeccion;
    }
}

// Instancias de ejemplo
const persona1 = new Persona("Juan", "Pérez", "12345678", "Soltero");
console.log(persona1.imprimirInformacion());

const estudiante1 = new Estudiante("Ana", "Gómez", "87654321", "Soltera");
estudiante1.matricular("Matemáticas");
console.log(estudiante1.imprimirInformacion());

const empleado1 = new Empleado("Carlos", "Ramírez", "11223344", "Casado", 2020, 105);
console.log(empleado1.imprimirInformacion());

const profesor1 = new Profesor("Laura", "Martínez", "55667788", "Casada", 2018, 210, "Física");
console.log(profesor1.imprimirInformacion());

const personalServicio1 = new PersonalServicio("Pedro", "López", "99887766", "Divorciado", 2015, 120, "Limpieza");
console.log(personalServicio1.imprimirInformacion());
