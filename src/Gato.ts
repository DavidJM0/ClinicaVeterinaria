import Animal from "./Animal";

export default class Gato extends Animal{

    constructor(
        nome: string,
        idade: number,
        tutor: string
    ){
        super(nome, idade, tutor)
    }

    emitirSom():void{
        console.log(`${this.getNomeAnimal()} mia!`)
    }

    cuidadosDiarios():void{
        console.log(`${this.getNomeAnimal()} precisa de um arranhador!`)
    }
}