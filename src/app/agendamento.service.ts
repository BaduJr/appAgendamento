import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  //private SERVER_URL = "http://localhost:3000/agendamento";
  //private SERVER_URL = "http://3.14.86.122:3000/";
  private SERVER_URL = "http://3.16.161.108:3000/agendamento";

  constructor(private httpClient: HttpClient) { }

  public obterTodos(idusuario: string){  
		return this.httpClient.get(this.SERVER_URL + '/' + idusuario);
	} 
  
  public save(data: any) {
    return this.httpClient.post(this.SERVER_URL, data); 
  }
}
