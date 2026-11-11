import Animal from "./Animal";
import Veterinario from "./Veterinario";

export default class Consulta{
    constructor(
        public animal: Animal,
        public veterinario: Veterinario
    ){}

    exibirConsulta(): void {
        console.log("Consulta agendada:");
        console.log(`Animal: ${this.animal.getNomeAnimal()}`);
        console.log(`Veterinário: ${this.veterinario.getNomeFuncionario()}`);
    }
}