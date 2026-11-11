"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = __importDefault(require("./Cachorro"));
const Gato_1 = __importDefault(require("./Gato"));
const Ave_1 = __importDefault(require("./Ave"));
const Veterinario_1 = __importDefault(require("./Veterinario"));
const Recepcionista_1 = __importDefault(require("./Recepcionista"));
const Clinica_1 = __importDefault(require("./Clinica"));
const Consulta_1 = __importDefault(require("./Consulta"));


const cachorro = new Cachorro_1.default("Rex", 3, "João");
const gato = new Gato_1.default("Mimi", 2, "Maria");
const ave = new Ave_1.default("Loro", 1, "Pedro");


const veterinario = new Veterinario_1.default("Carlos", 101, 4000, 5);
const recepcionista = new Recepcionista_1.default("Ana", 102, 2000, 10);


const clinica = new Clinica_1.default("Clínica Dona Marta");


clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);
clinica.contratarFuncionario(veterinario);
clinica.contratarFuncionario(recepcionista);


cachorro.emitirSom();
cachorro.cuidadosDiarios();
gato.emitirSom();
gato.cuidadosDiarios();
ave.emitirSom();
ave.cuidadosDiarios();

const consulta = new Consulta_1.default(cachorro, veterinario);
clinica.agendarConsulta(consulta);
consulta.exibirConsulta();

console.log("Bônus do veterinário:", veterinario.calcularBonus());
console.log("Bônus da recepcionista:", recepcionista.calcularBonus());

veterinario.alterarSalario(4500);
