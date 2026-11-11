"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const Animal_1 = require("./Animal");
class Ave extends Animal_1.Animal {
    tipo;
    precisaGaiola;
    constructor(nome, idade, tutor, tipo, precisaGaiola) {
        super(nome, idade, tutor);
        this.tipo = tipo;
        this.precisaGaiola = precisaGaiola;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getPrecisaGaiola() {
        return this.precisaGaiola;
    }
    setPrecisaGaiola(valor) {
        this.precisaGaiola = valor;
    }
    emitirSom() {
        return "Piu piu!";
    }
    descreverCuidados() {
        return "Precisa de gaiola adequada.";
    }
}
exports.Ave = Ave;
