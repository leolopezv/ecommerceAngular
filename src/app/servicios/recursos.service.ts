// src/app/servicios/recursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaz/usuario';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private usuarioUrl = 'http://localhost:3000/rest/usuarios';
  private tarjetaUrl = 'http://localhost:3000/rest/tarjetas';

  constructor(private http: HttpClient) { }

  agregarUsuario(usuario: Usuario) {
    return this.http.post(`${this.usuarioUrl}/save`, usuario);
  }
  obtenerUsuarios() {
    return this.http.get(`${this.usuarioUrl}/findAll/json`);
  }
  editarUsuario(usuario: Usuario) {
    return this.http.put(`${this.usuarioUrl}/update/${usuario.id}`, usuario);
  }
  borrarUsuario(id: number) {
    return this.http.delete(`${this.usuarioUrl}/delete/${id}`);
  }

  agregarTarjeta(tarjeta: any) {
    return this.http.post(`${this.tarjetaUrl}/save`, tarjeta);
  }
  obtenerTarjetas() {
    return this.http.get(`${this.tarjetaUrl}/findAll/json`);
  }
  editarTarjeta(tarjeta: any) {
    return this.http.put(`${this.tarjetaUrl}/update/${tarjeta.id}`, tarjeta);
  }
  borrarTarjeta(id: number) {
    return this.http.delete(`${this.tarjetaUrl}/delete/${id}`);
  }
}
