import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecursosService } from '../../servicios/recursos.service';
import { Usuarios } from '../../interfaz/usuarios';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [RecursosService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  title = 'Blog de usuarios';
  usuarios: Usuarios[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.usuarios = respuesta as Array<Usuarios>;
    })
  }
}