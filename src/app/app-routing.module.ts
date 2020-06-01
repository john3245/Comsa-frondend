import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumenComponent } from './resumen/resumen.component';
import { VerempleadosComponent } from './verempleados/verempleados.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpleadosregisComponent } from './empleadosregis/empleadosregis.component';
import { VerherramientasComponent } from './verherramientas/verherramientas.component';
import { DaraltaherramientaComponent } from './daraltaherramienta/daraltaherramienta.component';
import { VerprestamosComponent } from './verprestamos/verprestamos.component';
import { VerdetalleprestamosComponent } from './verdetalleprestamos/verdetalleprestamos.component';
import { DaraltaprestamosComponent } from './daraltaprestamos/daraltaprestamos.component';
import { DaraltatipoherramientaComponent } from './daraltatipoherramienta/daraltatipoherramienta.component';


const routes: Routes = [

  {path : 'home',component: HomeComponent},
  {path : 'resumen',component: ResumenComponent},
  {path : 'verempleados',component: VerempleadosComponent},
  {path : 'login',component: LoginComponent},
  {path : 'registro',component: RegistroComponent},
  {path : 'registroempleados',component: EmpleadosregisComponent},
  {path : 'verherramientas',component: VerherramientasComponent},
  {path : 'daraltaherramienta',component: DaraltaherramientaComponent},
  {path : 'verprestamos',component: VerprestamosComponent},
  {path : 'verdetalleprestamos',component: VerdetalleprestamosComponent},
  {path : 'Daraltaprestamos',component: DaraltaprestamosComponent},
  {path : 'Daraltatipoherramienta',component: DaraltatipoherramientaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
