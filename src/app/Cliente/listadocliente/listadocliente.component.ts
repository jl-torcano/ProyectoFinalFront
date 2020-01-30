import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-listadocliente',
  templateUrl: './listadocliente.component.html',
  styleUrls: ['./listadocliente.component.css']
})
export class ListadoclienteComponent implements OnInit {

  private listadoClientes:Cliente[];

  constructor(private http:ClienteService, private router:Router) { }

  ngOnInit() {
    this.http.getClientes().subscribe(datos => { this.listadoClientes = datos; })
  }

  editarCliente(cliente:Cliente): void {
    localStorage.setItem("dni", cliente.dni.toString());
    this.router.navigate(['modificarCliente']);
  }

  eliminarCliente(cliente:Cliente) {
    this.http.bajaCliente(cliente.dni).subscribe(datos => {
    this.listadoClientes = this.listadoClientes.filter(c => c != cliente);
      alert("Se ha eliminado la mascota"); this.router.navigate(['listadoClientes'])
    })
  }

}
