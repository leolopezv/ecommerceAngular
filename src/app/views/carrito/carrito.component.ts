import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecursosService } from '../../servicios/recursos.service';
import { Carrito } from '../../interfaz/carrito';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-carrito', // Cambiado a 'carrito' para mantener consistencia con el nombre del componente
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [RecursosService],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {  // Cambiado de 'BlogComponent' a 'CarritoComponent'
  title = 'Carrito';
  currentForm: 'carrito' | 'foto' | null = null;
  
  carritos: Carrito[] = [];
  carritoEditando: Carrito | null = null; // Evitando el uso de 'any'

  fotos: Foto[] = [];
  fotoEditando: Foto | null = null; // Evitando el uso de 'any'

  constructor(private recursosService: RecursosService) {
    this.cargarCarritos();
    this.cargarFotos();
  }

  cargarCarritos() {
    this.recursosService.obtenerCarrito().subscribe({
      next: (respuesta) => {
        this.carritos = respuesta as Carrito[];
      },
      error: (error) => {
        console.error('Error al cargar carritos:', error);
        // Mostrar mensaje de error al usuario
      }
    });
  }

  cargarFotos() {
    this.recursosService.obtenerFotos().subscribe({
      next: (respuesta) => {
        this.fotos = respuesta as Foto[];
      },
      error: (error) => {
        console.error('Error al cargar fotos:', error);
        // Mostrar mensaje de error al usuario
      }
    });
  }

  /*calcularTotalCarrito(): number {
    return this.carritos.reduce((total, carrito) => {
      return total + carrito.cantidad * carrito.foto.precio;
    }, 0);
  }
  

  incrementarCantidad(carrito: Carrito) {
    carrito.cantidad++;
    this.calcularTotalCarrito();
  }

  disminuirCantidad(carrito: Carrito) {
    if (carrito.cantidad > 1) {
      carrito.cantidad--;
      this.calcularTotalCarrito();
    }
  }*/

  borrarCarrito(id: number) {
    this.recursosService.borrarCarrito(id).subscribe({
      next: (response) => {
        console.log('Item borrado:', response);
        this.carritos = this.carritos.filter(carrito => carrito.id !== id);
        /*this.calcularTotalCarrito(); // Recalcular el total después de borrar*/
      },
      error: (error) => {
        console.error('Error al borrar carrito:', error);
        // Mostrar mensaje de error al usuario
      }
    });
  }
  
}

