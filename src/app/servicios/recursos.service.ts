// src/app/servicios/recursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogData } from '../interfaz/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private apiUrl = 'https://api.jsonbin.io/v3/qs/6673989be41b4d34e405e799'; // URL remota

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<BlogData> {
    return this.http.get<BlogData>(this.apiUrl);
  }
}
