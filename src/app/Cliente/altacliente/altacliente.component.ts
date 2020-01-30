import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/Servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit {

  cliente: Cliente = {};

  constructor(private http: ClienteService, private router: Router) { }

  ngOnInit() {
  }

  altaCliente() {
    this.http.altaCliente(this.cliente).subscribe(datos => {
      this.router.navigate(["listadoMascotas"]);
    })

  }
}
