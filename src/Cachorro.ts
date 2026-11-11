import { Animal } from "./Animal";

export class Cachorro extends Animal {
  private porte: string;
  private precisaPasseioDiario: boolean;

  constructor(
    nome: string,
    idade: number,
    tutor: string,
    porte: string,
    precisaPasseioDiario: boolean
  ) {
    super(nome, idade, tutor);
    this.porte = porte;
    this.precisaPasseioDiario = precisaPasseioDiario;
  }

  getPorte(): string {
    return this.porte;
  }

  setPorte(porte: string): void {
    this.porte = porte;
  }

  getPrecisaPasseioDiario(): boolean {
    return this.precisaPasseioDiario;
  }

  setPrecisaPasseioDiario(valor: boolean): void {
    this.precisaPasseioDiario = valor;
  }

  emitirSom(): string {
    return "Au au!";
  }

  descreverCuidados(): string {
    return "Precisa de passeio diário.";
  }
}