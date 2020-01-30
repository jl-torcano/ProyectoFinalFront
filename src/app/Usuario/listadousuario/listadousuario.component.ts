import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-listadousuario',
  templateUrl: './listadousuario.component.html',
  styleUrls: ['./listadousuario.component.css']
})
export class ListadousuarioComponent implements OnInit {

  private listadoUsuarios: Usuario[];

  constructor(private http: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.http.getUsuarios().subscribe(datos => { this.listadoUsuarios = datos; })
  }

  editarUsuario(usuario: Usuario): void {
    localStorage.setItem("idU", usuario.id.toString());
    this.router.navigate(['modificarUsuario']);
  }

  eliminarUsuario(usuario: Usuario) {
    this.http.bajaUsuario(usuario.id).subscribe(datos => {
    this.listadoUsuarios = this.listadoUsuarios.filter(u => u != usuario);
      alert("Se ha eliminado al Usuario"); this.router.navigate(['listadoUsuarios'])
    })
  }

  irNuevoUsuario(){
    this.router.navigate(['altaUsuarios'])
  }

}
