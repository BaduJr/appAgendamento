import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-agendamento',
  templateUrl: './cadastrar-agendamento.component.html',
  styleUrls: ['./cadastrar-agendamento.component.css']
})
export class CadastrarAgendamentoComponent implements OnInit {
  agendamentoForm = new FormGroup ({
    dataAgendamento: new FormControl(),
    aluno: new FormControl(),
    professor: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }

  saveOnClick(): void {
    
  }

}
