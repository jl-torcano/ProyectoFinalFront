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
  private pass: string="";
  private usuario: Usuario={};

  //Este componente se encarga de generar la vista principal de la pagina, que es un acceso con un login, como
  //vamos a necesitar consultar con la bbdd necesitamos un UsuarioService y un router para redireccionar
  constructor(private http: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  //Esta funcion se activa al pulsar el botón y comprobará si el usuario y el pass introducidos coinciden
  acceso() {
    //A través del http conectamos con bbdd y sacamos el usuario que tiene ese userName
    this.http.getUsuarioUsername(this.userName).subscribe(datos => { this.usuario = datos; 
    this.comprobar();})
    //Comprobamos si la contraseña introducida coincide con la suya propia
  }
  
  comprobar(){
    if(this.usuario.pass==null){
      this.router.navigate(['']);
    }

    if (this.pass == this.usuario.pass) {
      //Si la contraseña está bien comprobamos si es un usuario o el administrador
      if (this.usuario.permiso == 2) {
        //Creamos una variable local que guarde el nivel de permiso, para poder mostrar en el resto de vistas
        //el contenido según el permiso
        localStorage.setItem("permiso", "2");
        //redireccionamos a otra vista
        this.router.navigate(['administrador']);
      } else {
        localStorage.setItem("permiso", "1");
        this.router.navigate(['listadoMascotas']);
      }
    } else {//Si la contraseña no es valida redireccionamos al mismo formulario de inicio
      this.router.navigate(['']);
    }
  }

}
