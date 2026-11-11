"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const Funcionario_1 = require("./Funcionario");
class Veterinario extends Funcionario_1.Funcionario {
    especialidade;
    totalConsultas;
    constructor(nome, matricula, salario, especialidade, totalConsultas = 0) {
        super(nome, matricula, salario);
        this.especialidade = especialidade;
        this.totalConsultas = totalConsultas;
    }
    getEspecialidade() {
        return this.especialidade;
    }
    setEspecialidade(valor) {
        this.especialidade = valor;
    }
    getTotalConsultas() {
        return this.totalConsultas;
    }
    setTotalConsultas(valor) {
        if (valor < 0)
            throw new Error("Quantidade inválida");
        this.totalConsultas = valor;
    }
    realizarConsulta(consulta) {
        this.totalConsultas++;
        console.log("Consulta realizada!");
    }
    prescreverTratamento() {
        console.log("Tratamento prescrito!");
    }
    calcularBonus() {
        return this.totalConsultas * 50;
    }
}
exports.Veterinario = Veterinario;
