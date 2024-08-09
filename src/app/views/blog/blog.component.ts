import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecursosService } from '../../servicios/recursos.service';
import { Tarjeta } from '../../interfaz/tarjeta';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [RecursosService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  title = 'Mi perfil';
  tarjetas: Tarjeta[] = [];
  tarjetaEditando: Tarjeta | null = null;

  constructor(private recursosService: RecursosService) {
    this.cargarTarjetas();
  }

  cargarTarjetas() {
    this.recursosService.obtenerTarjetas().subscribe(respuesta => {
      this.tarjetas = respuesta as Array<Tarjeta>;
    });
  }

  borrarTarjeta(id: number) {
    this.recursosService.borrarTarjeta(id).subscribe(
      (response) => {
        console.log('Tarjeta borrada:', response);
        this.tarjetas = this.tarjetas.filter(tarjeta => tarjeta.id !== id);
      },
      (error) => {
        console.error('Error al borrar tarjeta:', error);
      }
    );
  }

  editarTarjeta(id: number) {
    const tarjeta = this.tarjetas.find(t => t.id === id);
    if (tarjeta) {
      this.tarjetaEditando = { ...tarjeta };
    }
  }

  guardarTarjetaEditada() {
    if (this.tarjetaEditando) {
      this.recursosService.editarTarjeta(this.tarjetaEditando).subscribe(
        (response) => {
          console.log('Tarjeta editada:', response);
          this.cargarTarjetas();
          this.tarjetaEditando = null;
        },
        (error) => {
          console.error('Error al editar tarjeta:', error);
        }
      );
    }
  }

  cancelarEdicion() {
    this.tarjetaEditando = null;
  }


}
