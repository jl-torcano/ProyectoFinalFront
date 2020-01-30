import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private path:string;

  constructor(private http:HttpClient) {
    this.path = 'http://localhost:8080/usuarios';
   }

   getUsuarios(){
     return this.http.get<Usuario[]>(this.path);
   }

   getUnUsuario(id:number){
    return this.http.get<Usuario>(this.path+"/"+id);
   }

   getUsuarioUsername(userName:string){
    return this.http.get<Usuario>(this.path+"/"+userName);
   }

   altaUsuario(usuario:Usuario){
     return this.http.post<Usuario>(this.path, usuario);
   }

   actualizarUsuario(usuario:Usuario){
     return this.http.put<Usuario>(this.path+"/"+usuario.id, usuario);
   }

   bajaUsuario(id:number){
     return this.http.delete<Usuario>(this.path+"/"+id);
   }

}
