import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private path:string;

  constructor(private http: HttpClient) { 
    this.path = 'http://localhost:8080/clientes';
  }

  getClientes() {
    return this.http.get<Cliente[]>(this.path);
  }

  getUnCliente(dni:string) {
    return this.http.get<Cliente>(this.path + "/" + dni);
  }

  altaCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.path, cliente);
  }

  actualizarCliente(cliente: Cliente) {
    return this.http.put<Cliente>(this.path + "/" + cliente.dni, cliente);
  }

  bajaCliente(dni: string) {
    return this.http.delete<Cliente>(this.path + "/" + dni);
  }
}
