"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    porte;
    precisaPasseioDiario;
    constructor(nome, idade, tutor, porte, precisaPasseioDiario) {
        super(nome, idade, tutor);
        this.porte = porte;
        this.precisaPasseioDiario = precisaPasseioDiario;
    }
    getPorte() {
        return this.porte;
    }
    setPorte(porte) {
        this.porte = porte;
    }
    getPrecisaPasseioDiario() {
        return this.precisaPasseioDiario;
    }
    setPrecisaPasseioDiario(valor) {
        this.precisaPasseioDiario = valor;
    }
    emitirSom() {
        return "Au au!";
    }
    descreverCuidados() {
        return "Precisa de passeio diário.";
    }
}
exports.Cachorro = Cachorro;
