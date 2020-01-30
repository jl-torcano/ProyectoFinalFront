import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

  usuario: Usuario = {};

  constructor(private http: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  altaUsuario() {
    this.usuario.permiso=1;
    this.http.altaUsuario(this.usuario).subscribe(datos => {
      this.router.navigate(["listadoUsuarios"]);
    });
  }
 
}
