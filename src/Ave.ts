import { Animal } from "./Animal";

export class Ave extends Animal {
  private tipo: string;
  private precisaGaiola: boolean;

  constructor(
    nome: string,
    idade: number,
    tutor: string,
    tipo: string,
    precisaGaiola: boolean
  ) {
    super(nome, idade, tutor);
    this.tipo = tipo;
    this.precisaGaiola = precisaGaiola;
  }

  getTipo(): string {
    return this.tipo;
  }

  setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  getPrecisaGaiola(): boolean {
    return this.precisaGaiola;
  }

  setPrecisaGaiola(valor: boolean): void {
    this.precisaGaiola = valor;
  }

  emitirSom(): string {
    return "Piu piu!";
  }

  descreverCuidados(): string {
    return "Precisa de gaiola adequada.";
  }
}