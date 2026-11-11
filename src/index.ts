import Cachorro from "./Cachorro";
import Gato from "./Gato";
import Ave from "./Ave";
import Veterinario from "./Veterinario";
import Recepcionista from "./Recepcionista";
import ClinicaVeterinaria from "./Clinica";
import Consulta from "./Consulta";

const cachorro = new Cachorro("Rex", 3, "João");
const gato = new Gato("Mimi", 2, "Maria");
const ave = new Ave("Loro", 1, "Pedro");

const veterinario = new Veterinario(
    "Carlos", 101, 4000, 5
);

const recepcionista = new Recepcionista(
    "Ana", 102, 2000, 10
);

const clinica = new ClinicaVeterinaria("Clínica Dona Marta");

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

const consulta = new Consulta(
    cachorro,
    veterinario,
);

clinica.agendarConsulta(consulta);
consulta.exibirConsulta();

console.log("Bônus do veterinário:", veterinario.calcularBonus());
console.log("Bônus da recepcionista:", recepcionista.calcularBonus());

veterinario.alterarSalario(4500);