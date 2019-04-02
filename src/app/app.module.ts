import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { LogoCentralComponent } from './component/logo-central/logo-central.component';
import { ModulosComponent } from './component/modulos/modulos.component';
import { BannerComponent } from './component/banner/banner.component';
import { OrganizacionesComponent } from './component/organizaciones/organizaciones.component';
import { AprenderComponent } from './component/aprender/aprender.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { FooterComponent } from './component/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LogoCentralComponent,
    ModulosComponent,
    BannerComponent,
    OrganizacionesComponent,
    AprenderComponent,
    FormularioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
