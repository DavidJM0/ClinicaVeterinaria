"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    getAnimal() {
        return this.animal;
    }
    setAnimal(animal) {
        this.animal = animal;
    }
    getVeterinario() {
        return this.veterinario;
    }
    setVeterinario(veterinario) {
        this.veterinario = veterinario;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
exports.Consulta = Consulta;
