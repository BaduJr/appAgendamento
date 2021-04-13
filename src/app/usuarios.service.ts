import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosDTO } from './usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private SERVER_URL = "http://localhost:3000/usuarios";
  //private SERVER_URL = "http://3.14.86.122:3000/";

  constructor(private httpClient: HttpClient) { }

  public obterProfessores(){  
		return this.httpClient.get(this.SERVER_URL);
	} 
  
  public obterUsuarioPorLoginESenha(login: string, senha: string){
    return this.httpClient.get(this.SERVER_URL + '/obterUsuarioPorLoginESenha/'+login+'/'+senha);
	} 

  public salvarUsuario(data: any) {
    return this.httpClient.post(this.SERVER_URL, data); 
  }
}
