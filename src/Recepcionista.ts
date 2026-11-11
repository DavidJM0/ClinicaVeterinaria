import Funcionario from "./Funcionario";

export default class Recepcionista extends Funcionario{
    private agendamentosConfirmados: number

    constructor(
        nome: string,
        matricula: number,
        salario: number,
        agendamentosConfirmados: number
    ){
        super(nome, matricula, salario)
        this.agendamentosConfirmados = agendamentosConfirmados
    }

    calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }

    agendarAtendimento(): void {
        this.agendamentosConfirmados++;
        console.log(`${this.getNomeFuncionario()} confirmou um agendamento.`);
    }
}