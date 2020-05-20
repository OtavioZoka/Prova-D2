import { Component, OnInit } from '@angular/core';
import { Alunos } from './Alunos.module';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: Alunos;
  constructor(private service: AlunosService) { }

  ngOnInit(): void {
    this.aluno = this.service.getAluno();
  }

}
