import { Funcionario } from "./Funcionario";
import { Consulta } from "./Consulta";

export class Veterinario extends Funcionario {
  private especialidade: string;
  private totalConsultas: number;

  constructor(
    nome: string,
    matricula: string,
    salario: number,
    especialidade: string,
    totalConsultas: number = 0
  ) {
    super(nome, matricula, salario);
    this.especialidade = especialidade;
    this.totalConsultas = totalConsultas;
  }

  getEspecialidade(): string {
    return this.especialidade;
  }

  setEspecialidade(valor: string): void {
    this.especialidade = valor;
  }

  getTotalConsultas(): number {
    return this.totalConsultas;
  }

  setTotalConsultas(valor: number): void {
    if (valor < 0) throw new Error("Quantidade inválida");
    this.totalConsultas = valor;
  }

  realizarConsulta(consulta: Consulta): void {
    this.totalConsultas++;
    console.log("Consulta realizada!");
  }

  prescreverTratamento(): void {
    console.log("Tratamento prescrito!");
  }

  calcularBonus(): number {
    return this.totalConsultas * 50;
  }
}