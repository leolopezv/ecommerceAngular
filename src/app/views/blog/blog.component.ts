import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecursosService } from '../../servicios/recursos.service';
import { Usuario } from '../../interfaz/usuario';

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
  usuarios: Usuario[] = [];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerUsuarios().subscribe(respuesta => {
      this.usuarios = respuesta as Array<Usuario>;
    })
  }
}
