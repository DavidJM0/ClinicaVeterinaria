import { Funcionario } from "./Funcionario";
import { Consulta } from "./Consulta";

export class Recepcionista extends Funcionario {
  private totalAgendamentosConfirmados: number;

  constructor(
    nome: string,
    matricula: string,
    salario: number,
    totalAgendamentos: number = 0
  ) {
    super(nome, matricula, salario);
    this.totalAgendamentosConfirmados = totalAgendamentos;
  }

  getTotalAgendamentosConfirmados(): number {
    return this.totalAgendamentosConfirmados;
  }

  setTotalAgendamentosConfirmados(valor: number): void {
    if (valor < 0) throw new Error("Quantidade inválida");
    this.totalAgendamentosConfirmados = valor;
  }

  agendarConsulta(consulta: Consulta): void {
    console.log("Consulta agendada!");
  }

  confirmarAgendamento(): void {
    this.totalAgendamentosConfirmados++;
  }

  calcularBonus(): number {
    return this.totalAgendamentosConfirmados * 10;
  }
}