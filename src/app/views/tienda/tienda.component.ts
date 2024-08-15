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
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  title = 'Tienda';
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {
    this.recursosService.obtenerFotos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    });
  }

  // Método para filtrar las fotos por precio
  filtrarPorPrecio(order: string) {
    if (order === 'all') {
      this.recursosService.obtenerFotos().subscribe(respuesta => {
        this.fotos = respuesta as Array<Foto>;
      });
    } else {
      this.recursosService.filtrarFotos(order).subscribe(respuesta => {
        this.fotos = respuesta as Array<Foto>;
      });
    }
  }

  // Método para filtrar las fotos por descripción
  filtrarPorDescripcion(order: string) {
    this.recursosService.filtrarPorDescripcion(order).subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    });
  }

  // Método que se activa cuando se cambia el filtro
  onFilterChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const order = selectElement.value;

    if (order === 'asc' || order === 'desc') {
      this.filtrarPorPrecio(order);
    } else if (order === 'ascAlpha' || order === 'descAlpha') {
      const alphaOrder = order === 'ascAlpha' ? 'asc' : 'desc';
      this.filtrarPorDescripcion(alphaOrder);
    } else {
      this.filtrarPorPrecio('all');
    }
  }
}
