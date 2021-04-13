import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { CadastrarUsuarioComponent } from '../cadastrar-usuario/cadastrar-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup ({
    login: new FormControl(),
    senha: new FormControl()
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
    else
    {
      alert('Preencha os campos de login e senha');
    }
  }

  abrirModal(): void {
    this.dialog.open(CadastrarUsuarioComponent, {
      width: '250px'
    });
  }
}