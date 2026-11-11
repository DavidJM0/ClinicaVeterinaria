"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = 0;
        this.setSalario(salario);
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(valor) {
        if (valor < 0) {
            throw new Error("Salário não pode ser negativo");
        }
        this.salario = valor;
    }
}
exports.Funcionario = Funcionario;
