import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumenComponent } from './resumen/resumen.component';
import { VerempleadosComponent } from './verempleados/verempleados.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpleadosregisComponent } from './empleadosregis/empleadosregis.component';
import { VerherramientasComponent } from './verherramientas/verherramientas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumenComponent,
    VerempleadosComponent,
    LoginComponent,
    RegistroComponent,
    EmpleadosregisComponent,
    VerherramientasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
