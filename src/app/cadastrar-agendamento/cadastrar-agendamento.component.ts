import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendamentoService } from '../agendamento.service';
import { UsuariosService } from '../usuarios.service';

interface Usuario{
  id: number;
  nome: string;
}

@Component({
  selector: 'app-cadastrar-agendamento',
  templateUrl: './cadastrar-agendamento.component.html',
  styleUrls: ['./cadastrar-agendamento.component.css']
})
export class CadastrarAgendamentoComponent implements OnInit {
  professor:string;
  dataSource: Usuario[];
  dataMinima: Date;
  agendamentoForm = new FormGroup ({
    data: new FormControl(),
    aluno: new FormControl('1'),
    professor: new FormControl()
  });

  constructor(
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.obterListaProfessores();

    const dataAtual = new Date();
    this.dataMinima = dataAtual;

    this.agendamentoForm = this.formBuilder.group({
      data: ['', Validators.required],
      aluno: ['1'],
      professor: ['', Validators.required]
    });
  }

  obterListaProfessores(): void{
    this.usuarioService.obterProfessores().subscribe((data: any[])=>{
			this.dataSource = data;
		})
  }

  saveOnClick(): void {
    this.agendamentoService.save(this.agendamentoForm.value).subscribe(
      res => {
       alert('Cadastrado com sucesso'); 
      }
    );
  }

}
