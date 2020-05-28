import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumenComponent } from './resumen/resumen.component';
import { VerempleadosComponent } from './verempleados/verempleados.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpleadosregisComponent } from './empleadosregis/empleadosregis.component';

const routes: Routes = [

  {path : 'home',component: HomeComponent},
  {path : 'resumen',component: ResumenComponent},
  {path : 'verempleados',component: VerempleadosComponent},
  {path : 'login',component: LoginComponent},
  {path : 'registro',component: RegistroComponent},
  {path : 'registroempleados',component: EmpleadosregisComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
