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

  private listadoMascotas:Mascota[];

  constructor(private http:MascotaService, private router:Router) { }

  ngOnInit() {
    this.http.getMascotas().subscribe(datos=>{this.listadoMascotas=datos;})
  }

  editarMascota(mascota:Mascota):void{
    localStorage.setItem("id",mascota.id.toString());
    this.router.navigate(['modificarMascota']);
  }

  eliminarMascota(mascota:Mascota){
    this.http.bajaMascota(mascota.id).subscribe(datos=>
      {this.listadoMascotas=this.listadoMascotas.filter(m=>m!=mascota);
    alert("Se ha eliminado la mascota"); this.router.navigate(['listadoMascotas'])
      })
  }

}
