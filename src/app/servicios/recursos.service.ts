// src/app/servicios/recursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaz/usuario';
import { Observable } from 'rxjs'; 
import { Foto } from '../interfaz/foto';


@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private usuarioUrl = 'http://localhost:3000/rest/usuarios';
  private tarjetaUrl = 'http://localhost:3000/rest/tarjetas';
  private domicilioUrl = 'http://localhost:3000/rest/domicilios';
  private fotoUrl = 'http://localhost:3000/rest/fotos';


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

  agregarDomicilio(domicilio: any) {
    return this.http.post(`${this.domicilioUrl}/save`, domicilio);
  }

  obtenerDomicilios() {
    return this.http.get(`${this.domicilioUrl}/findAll/json`);
  }

  editarDomicilio(domicilio: any) {
    return this.http.put(`${this.domicilioUrl}/update/${domicilio.id}`, domicilio);
  }

  borrarDomicilio(id: number) {
    return this.http.delete(`${this.domicilioUrl}/delete/${id}`);
  }

  obtenerFotos() {
    return this.http.get(`${this.fotoUrl}/findAll/json`);
  }

  filtrarFotos(order: string): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.fotoUrl}/findAllByPrice/json?order=${order}`);
  }

    // Método para filtrar fotos por descripción
    filtrarPorDescripcion(order: string): Observable<Foto[]> {
      return this.http.get<Foto[]>(`${this.fotoUrl}/findAllByDescripcion/json?order=${order}`);
    }
}
