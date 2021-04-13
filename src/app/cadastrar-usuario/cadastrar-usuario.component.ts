import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from '../usuarios.service';

export interface DialogData {
  nome: string;
}

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuarioForm = new FormGroup ({
    nome: new FormControl(),
    login: new FormControl(),
    senha: new FormControl(),
    papel: new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<CadastrarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', [ Validators.required ]],
      login: ['', [ Validators.required ]],
      senha: ['', [ Validators.required ]],
      papel:['1']
    });
  }

  cancelOnClick(): void {
    this.dialogRef.close();
  }

  saveOnClick(): void {
    this.usuarioService.salvarUsuario(this.usuarioForm.value).subscribe(
      res => {
        this.cancelOnClick();
        alert('Usuário cadastrado com sucesso');
      }
    );
  }
}