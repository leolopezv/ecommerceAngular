// src/app/servicios/recursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaz/usuario';
import { Foto } from '../interfaz/foto';


@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private usuarioUrl = 'http://localhost:3000/rest/usuarios';
  private tarjetaUrl = 'http://localhost:3000/rest/tarjetas';
  private domicilioUrl = 'http://localhost:3000/rest/domicilios';
  private fotoUrl = 'http://localhost:3000/rest/fotos';
  private carritoUrl = 'http://localhost:3000/rest/carritos';

  constructor(private http: HttpClient) { }

  /*Crud Usuarios*/
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

   /*Crud Tarjetas*/
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

   /*Crud Domicilio*/
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

   /*Crud carrito*/
  agregarCarrito(carrito: any) {
    return this.http.post(`${this.carritoUrl}/save`, carrito);
  }

  calcularTotalCarrito(){
    return this.http.get(`${this.carritoUrl}//calcularTotal/:userId`);
  }

  obtenerCarrito() {
    return this.http.get(`${this.carritoUrl}/findAll/json`);
  }

  borrarCarrito(id: number) {
    return this.http.delete(`${this.carritoUrl}/delete/${id}`);
  }

  /*Fotos*/
  obtenerFotos() {
    return this.http.get(`${this.fotoUrl}/findAll/json`);
  }
}
