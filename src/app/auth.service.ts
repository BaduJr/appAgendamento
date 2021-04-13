import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UsuariosDTO } from './usuario.dto';
import { UsuariosService } from './usuarios.service';

export interface Usuario{
  login: string,
  senha: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private nomeUsuario = new BehaviorSubject<string>('');

  get isLogado() {
    return this.loggedIn.asObservable();
  }

  get NomeUsuario() {
    return this.nomeUsuario.asObservable();
  }

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) {}

  login(user: Usuario){
    if (user.login !== '' && user.senha !== '' ) {
      
      const dados = this.usuarioService.obterUsuarioPorLoginESenha(user.login,user.senha)
      .subscribe((data: UsuariosDTO)=>{
        if(data == undefined){
          this.logout();

          if(this.isLogado){
            alert('Login ou senha incorretos');
          }
        }
        else{
          localStorage.setItem('idusuario', data.id.toString());
          this.nomeUsuario.next(data.nome);
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }
      })
    }
  }

  logout() {
    localStorage.removeItem('idusuario');
    localStorage.removeItem('nomeusuario');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}