export abstract class Funcionario {
  private nome: string;
  private matricula: string;
  private salario: number;

  constructor(nome: string, matricula: string, salario: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.salario = 0;
    this.setSalario(salario);
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getMatricula(): string {
    return this.matricula;
  }

  setMatricula(matricula: string): void {
    this.matricula = matricula;
  }

  getSalario(): number {
    return this.salario;
  }

  setSalario(valor: number): void {
    if (valor < 0) {
      throw new Error("Salário não pode ser negativo");
    }

    this.salario = valor;
  }

  abstract calcularBonus(): number;
}