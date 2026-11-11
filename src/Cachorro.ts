import Animal from "./Animal";

export default class Cachorro extends Animal{

    constructor(
        nome: string,
        idade: number,
        tutor: string
    ){
        super(nome, idade, tutor)
    }

    emitirSom():void{
        console.log(`${this.getNomeAnimal()} late!`)
    }

    cuidadosDiarios():void{
        console.log(`${this.getNomeAnimal()} precisa de passeios!`)
    }
}