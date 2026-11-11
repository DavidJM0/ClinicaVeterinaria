import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";

export class Clinica {
  private nome: string;
  private funcionarios: Funcionario[];
  private animais: Animal[];

  constructor(nome: string) {
    this.nome = nome;
    this.funcionarios = [];
    this.animais = [];
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getFuncionarios(): Funcionario[] {
    return [...this.funcionarios];
  }

  setFuncionarios(funcionarios: Funcionario[]): void {
    this.funcionarios = [...funcionarios];
  }

  getAnimais(): Animal[] {
    return [...this.animais];
  }

  setAnimais(animais: Animal[]): void {
    this.animais = [...animais];
  }

  adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }

  adicionarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }
}