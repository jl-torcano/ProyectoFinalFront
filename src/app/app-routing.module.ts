import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarmascotaComponent } from './Mascota/modificarmascota/modificarmascota.component';
import { ListadomascotasComponent } from './Mascota/listadomascotas/listadomascotas.component';
import { AltamascotaComponent } from './Mascota/altamascota/altamascota.component';
import { ListadousuarioComponent } from './Usuario/listadousuario/listadousuario.component';
import { AltausuarioComponent } from './Usuario/altausuario/altausuario.component';
import { ModificarusuarioComponent } from './Usuario/modificarusuario/modificarusuario.component';
import { ModificarclienteComponent } from './Cliente/modificarcliente/modificarcliente.component';
import { ListadoclienteComponent } from './Cliente/listadocliente/listadocliente.component';
import { AltaclienteComponent } from './Cliente/altacliente/altacliente.component';
import { AccesoComponent } from './Usuario/acceso/acceso.component';
import { AdministradorComponent } from './Usuario/administrador/administrador.component';


const routes: Routes = [{
  path: '',
  component: AccesoComponent
},{
  path: 'modificarMascota',
  component: ModificarmascotaComponent
}, {
  path: 'listadoMascotas',
  component: ListadomascotasComponent
}, {
  path: 'altaMascotas',
  component: AltamascotaComponent
}, {
  path: 'listadoUsuarios',
  component: ListadousuarioComponent
}, {
  path: 'altaUsuarios',
  component: AltausuarioComponent
}, {
  path: 'modificarUsuario',
  component: ModificarusuarioComponent
}, {
  path: 'listadoClientes',
  component: ListadoclienteComponent
}, {
  path: 'altaCliente',
  component: AltaclienteComponent
},{
  path: 'modificarCliente',
  component: ModificarclienteComponent
},{
  path:'administrador',
  component: AdministradorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
