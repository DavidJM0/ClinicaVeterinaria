import { Clinica } from "./Clinica";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";
import { Consulta } from "./Consulta";

const clinica = new Clinica("Clínica Dona Marta");

const cachorro = new Cachorro("Rex", 3, "João", "Grande", true);
const gato = new Gato("Mimi", 2, "Maria", true);
const ave = new Ave("Loro", 1, "Pedro", "Papagaio", true);

const veterinario = new Veterinario(
  "Carlos", "001", 3000, "Clínico geral"
);

const recepcionista = new Recepcionista(
  "Ana", "002", 1800
);

clinica.adicionarAnimal(cachorro);
clinica.adicionarAnimal(gato);
clinica.adicionarAnimal(ave);
clinica.adicionarFuncionario(veterinario);
clinica.adicionarFuncionario(recepcionista);

const consulta = new Consulta(
  cachorro,
  veterinario,
  new Date()
);

veterinario.realizarConsulta(consulta);
recepcionista.confirmarAgendamento();


console.log(cachorro.emitirSom());
console.log(gato.emitirSom());
console.log(ave.emitirSom());
console.log("Salário:", veterinario.getSalario());
console.log("Bônus:", veterinario.calcularBonus());
console.log("Bônus recepcionista:", recepcionista.calcularBonus());
console.log("Animais:", clinica.getAnimais());
console.log("Funcionários:", clinica.getFuncionarios());