"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    usaArranhador;
    constructor(nome, idade, tutor, usaArranhador) {
        super(nome, idade, tutor);
        this.usaArranhador = usaArranhador;
    }
    getUsaArranhador() {
        return this.usaArranhador;
    }
    setUsaArranhador(valor) {
        this.usaArranhador = valor;
    }
    emitirSom() {
        return "Miau!";
    }
    descreverCuidados() {
        return "Precisa de arranhador.";
    }
}
exports.Gato = Gato;
