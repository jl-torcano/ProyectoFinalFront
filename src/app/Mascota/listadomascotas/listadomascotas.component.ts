import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/modelos/mascota';

@Component({
  selector: 'app-listadomascotas',
  templateUrl: './listadomascotas.component.html',
  styleUrls: ['./listadomascotas.component.css']
})
export class ListadomascotasComponent implements OnInit {

  private listadoMascotas: Mascota[];
  private totalventas: number = 0;
  private tipo:string;

  //En este componente vamos a sacar los listados de mascotas
  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
    this.listadoCompleto();
  }

  //Obtiene Listado Completo
  listadoCompleto() {
    this.http.getMascotas().subscribe(datos => { this.listadoMascotas = datos; })
  }

  //Redirecciona a la vista donde se modifican las mascotas
  editarMascota(mascota: Mascota): void {
    localStorage.setItem("id", mascota.id.toString());
    this.router.navigate(['modificarMascota']);
  }

  //elimina una Mascota
  eliminarMascota(mascota: Mascota) {
    this.http.bajaMascota(mascota.id).subscribe(datos => {
      this.listadoMascotas = this.listadoMascotas.filter(m => m != mascota);
      alert("Se ha eliminado la mascota"); this.router.navigate(['listadoMascotas'])
    })
  }

  //redirecciona a la vista donde se da de alta una nueva mascota
  irNuevaMascota() {
    this.router.navigate(['altaMascotas'])
  }

  //Obtiene de la base de datos el listado de mascotas que se han vendido (marcadas con un 1 en la columna estado)
  historico() {
    this.http.getMascotasVendidas(1).subscribe(datos => {
    this.listadoMascotas = datos;
      for (let i=0; this.listadoMascotas.length; i++) {
        this.totalventas += this.listadoMascotas[i].precio;
      }
    })
  }

  stock() {
    this.http.getMascotasVendidas(-1).subscribe(datos => { this.listadoMascotas = datos; })
  }

  buscaTipo(){
    this.http.getTipoMascotas(this.tipo).subscribe(datos => { this.listadoMascotas = datos; })
  }

}
