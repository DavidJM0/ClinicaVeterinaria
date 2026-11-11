"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.Funcionario {
    totalAgendamentosConfirmados;
    constructor(nome, matricula, salario, totalAgendamentos = 0) {
        super(nome, matricula, salario);
        this.totalAgendamentosConfirmados = totalAgendamentos;
    }
    getTotalAgendamentosConfirmados() {
        return this.totalAgendamentosConfirmados;
    }
    setTotalAgendamentosConfirmados(valor) {
        if (valor < 0)
            throw new Error("Quantidade inválida");
        this.totalAgendamentosConfirmados = valor;
    }
    agendarConsulta(consulta) {
        console.log("Consulta agendada!");
    }
    confirmarAgendamento() {
        this.totalAgendamentosConfirmados++;
    }
    calcularBonus() {
        return this.totalAgendamentosConfirmados * 10;
    }
}
exports.Recepcionista = Recepcionista;
