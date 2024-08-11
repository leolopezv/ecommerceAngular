import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [RecursosService],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  title = 'Tienda';
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerFotos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    });
  }
}