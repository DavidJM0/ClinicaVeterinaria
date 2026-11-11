import Animal from "./Animal";
import Consulta from "./Consulta";
import Funcionario from "./Funcionario";

export default class Clinica{
    public animais: Animal[] = [];
    public funcionarios: Funcionario[] = [];
    public consultas: Consulta[] = []

    constructor(
        public nome: string
    ){}

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    contratarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    agendarConsulta(consulta: Consulta): void {
        this.consultas.push(consulta);
    }

    listarAnimais(): void {
        this.animais.forEach(animal => {
            console.log(animal.getNomeAnimal());
        });
    }

    listarFuncionarios(): void {
        this.funcionarios.forEach(funcionario => {
            console.log(funcionario.getNomeFuncionario());
        });
    }
}