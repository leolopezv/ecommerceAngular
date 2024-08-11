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
  styleUrls: ['./inicio.component.css'] // Cambiado a 'styleUrls'
})
export class InicioComponent {
  title = 'Inicio';
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerFotos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    });
  }
}

