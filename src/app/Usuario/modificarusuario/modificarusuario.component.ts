import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.component.html',
  styleUrls: ['./modificarusuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {

  usuario: Usuario = {};

  constructor(private http: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    let id = localStorage.getItem("idU");
    this.http.getUnUsuario(+id).subscribe(datos => { this.usuario = datos; })
  }

  modificarUsuario(usuario: Usuario) {
    this.http.actualizarUsuario(usuario).subscribe(datos => {
      this.usuario = datos;
      this.router.navigate(['listadoUsuarios'])
    })
  }

}
