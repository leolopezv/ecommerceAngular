// src/app/servicios/recursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaz/usuario';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private apiUrl = 'http://localhost:3000/rest/usuarios';

  constructor(private http: HttpClient) { }

  agregarUsuario(usuario: Usuario) {
    return this.http.post(`${this.apiUrl}/save`, usuario);
  }

  obtenerUsuarios() {
    return this.http.get(`${this.apiUrl}/findAll/json`);
  }

  editarUsuario(usuario: Usuario) {
    return this.http.put(`${this.apiUrl}/update/${usuario.id}`, usuario);
  }

  borrarUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
