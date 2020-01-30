import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../modelos/mascota';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private path: string;

  constructor(private http: HttpClient) {
    this.path = 'http://localhost:8080/mascotas';
  }

  getMascotas() {
    return this.http.get<Mascota[]>(this.path);
  }

  getTipoMascotas(tipo:string) {
    return this.http.get<Mascota[]>(this.path + "/tipo/"+tipo);
  }

  getUnaMascota(id: number) {
    return this.http.get<Mascota>(this.path + "/" + id);
  }

  getMascotasVendidas(estado: number) {
    return this.http.get<Mascota[]>(this.path + "/historial/"+ estado);
  }

  altaMascota(mascota: Mascota) {
    return this.http.post<Mascota>(this.path, mascota);
  }

  actualizarMascota(mascota: Mascota) {
    return this.http.put<Mascota>(this.path + "/" + mascota.id, mascota);
  }

  bajaMascota(id: number) {
    return this.http.delete<Mascota>(this.path + "/" + id);
  }

}
