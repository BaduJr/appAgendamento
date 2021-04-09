import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CadastrarAgendamentoComponent } from './cadastrar-agendamento/cadastrar-agendamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'agendamento', pathMatch: 'full'},
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'cadastrarAgendamento', component: CadastrarAgendamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
