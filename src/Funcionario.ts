export default abstract class Funcionario{
    private nome: string
    private matricula: number
    private salario: number

    constructor(
        nome: string,
        matricula: number,
        salario: number
    ){
        this.nome = nome
        this.matricula = matricula
        this.salario = salario
    }

    getNomeFuncionario():string{
        return this.nome
    }

    setNomeFuncionario(nome:string):void{
        this.nome = nome
    }

    getMatricula():number{
        return this.matricula
    }

    setMatricula(matricula:number):void{
        this.matricula = matricula
    }
    
    getSalario():number{
        return this.salario
    }

    setSalario(salario:number):void{
        this.salario = salario
    }

     alterarSalario(novoSalario: number): void {
        if (novoSalario > 0) {
            this.salario = novoSalario;
            console.log("Salário alterado com sucesso!");
        } else {
            console.log("Salário inválido!");
        }
    }

    abstract calcularBonus(): number;

}