"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
class Clinica {
    nome;
    funcionarios;
    animais;
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
        this.animais = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getFuncionarios() {
        return [...this.funcionarios];
    }
    setFuncionarios(funcionarios) {
        this.funcionarios = [...funcionarios];
    }
    getAnimais() {
        return [...this.animais];
    }
    setAnimais(animais) {
        this.animais = [...animais];
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    adicionarAnimal(animal) {
        this.animais.push(animal);
    }
}
exports.Clinica = Clinica;
