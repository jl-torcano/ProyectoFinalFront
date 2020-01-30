import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarmascota',
  templateUrl: './modificarmascota.component.html',
  styleUrls: ['./modificarmascota.component.css']
})
export class ModificarmascotaComponent implements OnInit {

  mascota: Mascota = {};

  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
    this.cargarMascota();
  }

  cargarMascota() {
    let id = localStorage.getItem("id");
    this.http.getUnaMascota(+id).subscribe(datos => { this.mascota = datos; })
  }

  modificarMascota(mascota: Mascota) {
    this.http.actualizarMascota(mascota).subscribe(datos => {
      this.mascota = datos;
      this.router.navigate(["listadoMascotas"]);
    })
  }

}
