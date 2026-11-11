"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clinica {
    nome;
    animais = [];
    funcionarios = [];
    consultas = [];
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
    }
    contratarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    agendarConsulta(consulta) {
        this.consultas.push(consulta);
    }
    listarAnimais() {
        this.animais.forEach(animal => {
            console.log(animal.getNomeAnimal());
        });
    }
    listarFuncionarios() {
        this.funcionarios.forEach(funcionario => {
            console.log(funcionario.getNomeFuncionario());
        });
    }
}
exports.default = Clinica;
