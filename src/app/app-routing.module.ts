import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AuthGuard } from './Auth.guard';
import { CadastrarAgendamentoComponent } from './cadastrar-agendamento/cadastrar-agendamento.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AgendamentoComponent, canActivate: [AuthGuard] },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'cadastrarAgendamento', component: CadastrarAgendamentoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
