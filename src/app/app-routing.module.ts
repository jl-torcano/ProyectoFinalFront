import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarmascotaComponent } from './Mascota/modificarmascota/modificarmascota.component';
import { ListadomascotasComponent } from './Mascota/listadomascotas/listadomascotas.component';
import { AltamascotaComponent } from './Mascota/altamascota/altamascota.component';


const routes: Routes = [{
  path: 'modificarMascota',
  component: ModificarmascotaComponent
}, {
  path: 'listadoMascotas',
  component: ListadomascotasComponent
}, {
  path: 'altaMascotas',
  component: AltamascotaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
