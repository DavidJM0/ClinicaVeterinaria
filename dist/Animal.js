"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    getNomeAnimal() {
        return this.nome;
    }
    setNomeAnimal(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getTutor() {
        return this.tutor;
    }
    setTutor(tutor) {
        this.tutor = tutor;
    }
}
exports.default = Animal;
