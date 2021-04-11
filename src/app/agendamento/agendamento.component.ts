import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService) { }

  displayedColumns: string[] = ['ID', 'Data', 'Aluno', 'Professor'];
  dataSource = [];

  ngOnInit(): void {
    this.listarAgendamentos();
  }

  listarAgendamentos(): void{
    this.agendamentoService.obterTodos().subscribe((data: any[])=>{
			this.dataSource = data;
		})
  }
}