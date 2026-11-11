export abstract class Animal {
  private nome: string;
  private idade: number;
  private tutorResponsavel: string;

  constructor(nome: string, idade: number, tutorResponsavel: string) {
    this.nome = nome;
    this.idade = idade;
    this.tutorResponsavel = tutorResponsavel;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getIdade(): number {
    return this.idade;
  }

  setIdade(idade: number): void {
    if (idade < 0) throw new Error("Idade inválida");
    this.idade = idade;
  }

  getTutorResponsavel(): string {
    return this.tutorResponsavel;
  }

  setTutorResponsavel(tutor: string): void {
    this.tutorResponsavel = tutor;
  }

  abstract emitirSom(): string;
  abstract descreverCuidados(): string;
}