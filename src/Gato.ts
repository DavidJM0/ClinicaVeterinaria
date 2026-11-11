import { Animal } from "./Animal";

export class Gato extends Animal {
  private usaArranhador: boolean;

  constructor(
    nome: string,
    idade: number,
    tutor: string,
    usaArranhador: boolean
  ) {
    super(nome, idade, tutor);
    this.usaArranhador = usaArranhador;
  }

  getUsaArranhador(): boolean {
    return this.usaArranhador;
  }

  setUsaArranhador(valor: boolean): void {
    this.usaArranhador = valor;
  }

  emitirSom(): string {
    return "Miau!";
  }

  descreverCuidados(): string {
    return "Precisa de arranhador.";
  }
}