import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecursosService } from '../../servicios/recursos.service';
import { Usuario } from '../../interfaz/usuario';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [RecursosService],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  title = 'Envíanos tus comentarios';
  usuario: Usuario = {
    nombre: '',
    correo: '',
    celular: '',
    comentario: ''
  };
  successMessage: string = '';
  success = false;
  buttonText = 'Enviar Registro';

  constructor(private recursosService: RecursosService) {}

  agregarUsuario(usuario: Usuario) {
    this.recursosService.agregarUsuario(usuario).subscribe(
      (response) => {
        console.log('Usuario agregado:', response);
        this.successMessage = 'Usuario agregado correctamente.';
        this.success = true;
        this.buttonText = '¡Éxito!';
        setTimeout(() => {
          this.successMessage = '';
          this.success = false;
          this.buttonText = 'Enviar Registro';
        }, 3000);
      },
      (error) => {
        console.error('Error al agregar usuario:', error);
      }
    );
  }

  onSubmit() {
    this.agregarUsuario(this.usuario);
    this.usuario = {
      nombre: '',
      correo: '',
      celular: '',
      comentario: ''
    };
  }
}
