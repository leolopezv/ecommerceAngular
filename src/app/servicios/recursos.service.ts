// src/app/servicios/recursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecursosService {

  constructor(private http: HttpClient) { }
  obtenerUsuarios(){
    return this.http.get('http://localhost:3000/rest/usuarios/findAll/json')
    }
  }
