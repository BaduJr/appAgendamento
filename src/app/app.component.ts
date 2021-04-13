import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appAgendamento';
  
  isLogado$: Observable<boolean>;
  nomeUsuario$: Observable<string>;
  nomeUsuario: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLogado$ = this.authService.isLogado;
    this.authService.NomeUsuario.pipe(take(1),
    map((nomeUsuario: string) => {
      this.nomeUsuario = nomeUsuario;
    }));
  }

  logout(){
    this.authService.logout();
  }
}