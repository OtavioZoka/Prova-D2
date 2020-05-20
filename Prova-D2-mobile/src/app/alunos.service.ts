import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  aluno = {
    nome: "Otávio Reis",
    idade: 27,
    ra: 11815319

  }
  constructor() { }
  getAluno() {
    return this.aluno;
  }
}
