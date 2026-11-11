
import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
  private animal: Animal;
  private veterinario: Veterinario;
  private data: Date;

  constructor(animal: Animal, veterinario: Veterinario, data: Date) {
    this.animal = animal;
    this.veterinario = veterinario;
    this.data = data;
  }

  getAnimal(): Animal {
    return this.animal;
  }

  setAnimal(animal: Animal): void {
    this.animal = animal;
  }

  getVeterinario(): Veterinario {
    return this.veterinario;
  }

  setVeterinario(veterinario: Veterinario): void {
    this.veterinario = veterinario;
  }

  getData(): Date {
    return this.data;
  }

  setData(data: Date): void {
    this.data = data;
  }
}