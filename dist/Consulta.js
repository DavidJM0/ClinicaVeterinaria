"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consulta {
    animal;
    veterinario;
    constructor(animal, veterinario) {
        this.animal = animal;
        this.veterinario = veterinario;
    }
    exibirConsulta() {
        console.log("Consulta agendada:");
        console.log(`Animal: ${this.animal.getNomeAnimal()}`);
        console.log(`Veterinário: ${this.veterinario.getNomeFuncionario()}`);
    }
}
exports.default = Consulta;
