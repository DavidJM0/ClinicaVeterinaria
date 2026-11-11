"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Veterinario extends Funcionario_1.default {
    consultasRealizadas;
    constructor(nome, matricula, salario, consultasRealizdas) {
        super(nome, matricula, salario);
        this.consultasRealizadas = consultasRealizdas;
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
    realizarConsulta() {
        this.consultasRealizadas++;
        console.log(`${this.getNomeFuncionario()} realizou uma consulta.`);
    }
    prescreverTratamento() {
        console.log(`${this.getNomeFuncionario()} prescreveu um tratamento.`);
    }
}
exports.default = Veterinario;
