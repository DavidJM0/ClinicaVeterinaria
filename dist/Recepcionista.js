"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Recepcionista extends Funcionario_1.default {
    agendamentosConfirmados;
    constructor(nome, matricula, salario, agendamentosConfirmados) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = agendamentosConfirmados;
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 10;
    }
    agendarAtendimento() {
        this.agendamentosConfirmados++;
        console.log(`${this.getNomeFuncionario()} confirmou um agendamento.`);
    }
}
exports.default = Recepcionista;
