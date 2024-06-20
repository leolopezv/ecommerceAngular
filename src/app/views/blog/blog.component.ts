import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { BlogData } from '../../interfaz/foto';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogData: BlogData | null = null;  // Cambiado a BlogData

  constructor(private recursosService: RecursosService) {}

  ngOnInit(): void {
    this.recursosService.obtenerDatos().subscribe(respuesta => {
      this.blogData = respuesta;
    });
  }
}
