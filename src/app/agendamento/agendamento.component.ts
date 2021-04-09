import { Component, OnInit } from '@angular/core';

export interface Agendamento {
  id: number;
  dataAgendamento: Date;
  aluno: string;
  professor: string;
}

const LISTA_AGENDAMENTOS: Agendamento[] = [
  {id: 1, dataAgendamento: new Date(), aluno: 'Aluno 1', professor: 'Professor 1' },
  {id: 2, dataAgendamento: new Date(), aluno: 'Aluno 2', professor: 'Professor 1' },
  {id: 3, dataAgendamento: new Date(), aluno: 'Aluno 3', professor: 'Professor 1' },
  {id: 4, dataAgendamento: new Date(), aluno: 'Aluno 4', professor: 'Professor 1' },
  {id: 5, dataAgendamento: new Date(), aluno: 'Aluno 5', professor: 'Professor 1' },
];

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['ID', 'Data', 'Aluno', 'Professor'];
  dataSource = [];

  ngOnInit(): void {
    this.dataSource = LISTA_AGENDAMENTOS;
  }

}
