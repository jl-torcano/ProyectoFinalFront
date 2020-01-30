import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  private userName: string = null;
  private pass: string = null;
  private usuario: Usuario;

  constructor(private http: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  acceso() {
    this.http.getUsuarioUsername(this.userName).subscribe(datos => { this.usuario = datos; })
    if (this.pass == this.usuario.pass) {
      if (this.usuario.permiso == 2) {
        localStorage.setItem("permiso", "2");
        this.router.navigate(['administrador'])
      } else {
        localStorage.setItem("permiso", "1");
        this.router.navigate(['listadoMascotas'])
      }
    }

  }


}
