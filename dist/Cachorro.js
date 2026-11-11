"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        console.log(`${this.getNomeAnimal()} late!`);
    }
    cuidadosDiarios() {
        console.log(`${this.getNomeAnimal()} precisa de passeios!`);
    }
}
exports.default = Cachorro;
