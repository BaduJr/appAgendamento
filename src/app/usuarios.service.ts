import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  
  // public save(data: any) {
  //   return this.httpClient.post(this.SERVER_URL, data); 
  // }
}
