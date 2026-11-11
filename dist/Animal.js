"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    nome;
    idade;
    tutorResponsavel;
    constructor(nome, idade, tutorResponsavel) {
        this.nome = nome;
        this.idade = idade;
        this.tutorResponsavel = tutorResponsavel;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (idade < 0)
            throw new Error("Idade inválida");
        this.idade = idade;
    }
    getTutorResponsavel() {
        return this.tutorResponsavel;
    }
    setTutorResponsavel(tutor) {
        this.tutorResponsavel = tutor;
    }
}
exports.Animal = Animal;
