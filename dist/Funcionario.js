"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    getNomeFuncionario() {
        return this.nome;
    }
    setNomeFuncionario(nome) {
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
    setSalario(salario) {
        this.salario = salario;
    }
    alterarSalario(novoSalario) {
        if (novoSalario > 0) {
            this.salario = novoSalario;
            console.log("Salário alterado com sucesso!");
        }
        else {
            console.log("Salário inválido!");
        }
    }
}
exports.default = Funcionario;
