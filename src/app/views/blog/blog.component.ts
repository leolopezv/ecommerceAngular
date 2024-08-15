import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecursosService } from '../../servicios/recursos.service';
import { Tarjeta } from '../../interfaz/tarjeta';
import { Domicilio } from '../../interfaz/domicilio';

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
  currentForm: 'agregarTarjeta'|'tarjeta' | 'domicilio' | null = null;
  showForm: boolean = false;
  tarjetas: Tarjeta[] = [];
  nuevaTarjeta: Tarjeta = {
    banco: '',
    titular: '',
    numero: '',
    codigo: '777',
    usuario_id: 1,
    fecha: new Date()
  };
  tarjetaEditando: any = {};

  domicilios: Domicilio[] = [];
  domicilioEditando: any = {};

  constructor(private recursosService: RecursosService) {
    this.cargarTarjetas();
    this.cargarDomicilios();
  }

  cargarTarjetas() {
    this.recursosService.obtenerTarjetas().subscribe(respuesta => {
      this.tarjetas = respuesta as Array<Tarjeta>;
    });
  }

  cargarDomicilios() {
    this.recursosService.obtenerDomicilios().subscribe(respuesta => {
      this.domicilios = respuesta as Array<Domicilio>;
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

  borrarDomicilio(id: number) {
    this.recursosService.borrarDomicilio(id).subscribe(
      (response) => {
        console.log('Domicilio borrado:', response);
        this.domicilios = this.domicilios.filter(domicilio => domicilio.id !== id);
      },
      (error) => {
        console.error('Error al borrar domicilio:', error);
      }
    );
  }

  showAgregarTarjeta() {
    this.currentForm = 'agregarTarjeta';
  }

  agregarTarjeta(): void {
    const nuevaId = this.tarjetas.length > 0 ? Math.max(...this.tarjetas.map(t => t.id || 0)) + 1 : 1;
    const tarjetaConId = { ...this.nuevaTarjeta, id: nuevaId };
    this.tarjetas.push(tarjetaConId);
    this.nuevaTarjeta = {
      banco: '',
      titular: '',
      numero: '',
      codigo: '777',
      usuario_id: 1,
      fecha: new Date()
    };
    this.currentForm = null;
  }

  editarTarjeta(id: number) {
    const tarjeta = this.tarjetas.find(t => t.id === id);
    if (tarjeta) {
      this.tarjetaEditando = { ...tarjeta };
    }
    this.currentForm = 'tarjeta';
  }

  editarDomicilio(id: number) {
    const domicilio = this.domicilios.find(d => d.id === id);
    if (domicilio) {
      this.domicilioEditando = { ...domicilio };
    }
    this.currentForm = 'domicilio';
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
    this.currentForm = null;
  }

  guardarDomicilioEditado() {
    if (this.domicilioEditando) {
      this.recursosService.editarDomicilio(this.domicilioEditando).subscribe(
        (response) => {
          console.log('Domicilio editado:', response);
          this.cargarDomicilios();
          this.domicilioEditando = null;
        },
        (error) => {
          console.error('Error al editar domicilio:', error);
        }
      );
    }
    this.currentForm = null;
  }

  cancelarEdicionTarjeta() {
    this.currentForm = null;
  }

  cancelarEdicionDomicilio() {
    this.currentForm = null;
  }


}
