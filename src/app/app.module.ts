import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { CaracteresDirective } from './Validador/caracteres.directive';
import { MinusculaDirective } from './Validador/minuscula.directive';
import { UnaMayusculaDirective } from './Validador/una-mayuscula.directive';
import { UnaMinusculaDirective } from './Validador/una-minuscula.directive';
import { UnNumeroDirective } from './Validador/un-numero.directive';
import { TlfDirective } from './Validador/tlf.directive';
import { MascotaService } from './Servicios/mascota.service';
import { ListadomascotasComponent } from './Mascota/listadomascotas/listadomascotas.component';
import { ModificarmascotaComponent } from './Mascota/modificarmascota/modificarmascota.component';
import { AltamascotaComponent } from './Mascota/altamascota/altamascota.component';
import { AltausuarioComponent } from './Usuario/altausuario/altausuario.component';
import { ListadousuarioComponent } from './Usuario/listadousuario/listadousuario.component';
import { ModificarusuarioComponent } from './Usuario/modificarusuario/modificarusuario.component';
import { AltaclienteComponent } from './Cliente/altacliente/altacliente.component';
import { ModificarclienteComponent } from './Cliente/modificarcliente/modificarcliente.component';
import { ListadoclienteComponent } from './Cliente/listadocliente/listadocliente.component';
import { AdministradorComponent } from './Usuario/administrador/administrador.component';
import { VendedorComponent } from './Usuario/vendedor/vendedor.component';
import { AccesoComponent } from './Usuario/acceso/acceso.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    CaracteresDirective,
    MinusculaDirective,
    UnaMayusculaDirective,
    UnaMinusculaDirective,
    UnNumeroDirective,
    TlfDirective,
    ListadomascotasComponent,
    ModificarmascotaComponent,
    AltamascotaComponent,
    AltausuarioComponent,
    ListadousuarioComponent,
    ModificarusuarioComponent,
    AltaclienteComponent,
    ModificarclienteComponent,
    ListadoclienteComponent,
    AdministradorComponent,
    VendedorComponent,
    AccesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MascotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
