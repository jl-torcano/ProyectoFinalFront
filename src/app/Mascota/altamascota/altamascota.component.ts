import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altamascota',
  templateUrl: './altamascota.component.html',
  styleUrls: ['./altamascota.component.css']
})
export class AltamascotaComponent implements OnInit {

  mascota: Mascota = {};

  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
  }

  altaMascota() {
    this.mascota.vendida = -1;
    this.mascota.amo = "Tienda";
    this.mascota.vendedor = " - ";
    this.http.altaMascota(this.mascota).subscribe(datos => {
      this.router.navigate(["listadoMascotas"]);
    })
  }
  

}
