import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [RecursosService],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  title = 'Inicio';
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {
    // Carga inicial de fotos
    this.recursosService.obtenerFotos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    });
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

    if (order === 'ascAlpha' || order === 'descAlpha') {
      const alphaOrder = order === 'ascAlpha' ? 'asc' : 'desc';
      this.filtrarPorDescripcion(alphaOrder);
    } else {
      // Lógica para otros filtros si es necesario
      this.recursosService.obtenerFotos().subscribe(respuesta => {
        this.fotos = respuesta as Array<Foto>;
      });
    }
  }
}
