import Funcionario from "./Funcionario";

export default class Veterinario extends Funcionario{
    private consultasRealizadas: number

    constructor(
        nome: string,
        matricula: number,
        salario: number,
        consultasRealizdas: number 
    ){
        super(nome, matricula, salario)
        this.consultasRealizadas = consultasRealizdas
    }

    calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }

    realizarConsulta(): void {
        this.consultasRealizadas++;
        console.log(`${this.getNomeFuncionario()} realizou uma consulta.`);
    }

    prescreverTratamento(): void {
        console.log(`${this.getNomeFuncionario()} prescreveu um tratamento.`);
    }
} 