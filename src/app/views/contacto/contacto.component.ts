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

  title = 'Blog de comentarios';
  usuarios: Usuario[] = [];
  usuarioEditando: Usuario | null = null;
  usuario = {
    nombre: '',
    correo: '',
    celular: '',
    comentario: ''
  };

  successMessage: string = '';
  success = false;
  buttonText = 'Enviar Comentario';

  constructor(private recursosService: RecursosService) {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.recursosService.obtenerUsuarios().subscribe(respuesta => {
      this.usuarios = respuesta as Array<Usuario>;
    });
  }

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
          this.buttonText = 'Enviar Comentario';
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

  borrarUsuario(id: number) {
    this.recursosService.borrarUsuario(id).subscribe(
      (response) => {
        console.log('Usuario borrado:', response);
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      },
      (error) => {
        console.error('Error al borrar usuario:', error);
      }
    );
  }

  editarUsuario(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      this.usuarioEditando = { ...usuario };
    }
  }

  guardarUsuarioEditado() {
    if (this.usuarioEditando) {
      this.recursosService.editarUsuario(this.usuarioEditando).subscribe(
        (response) => {
          console.log('Usuario editado:', response);
          this.cargarUsuarios();
          this.usuarioEditando = null;
        },
        (error) => {
          console.error('Error al editar usuario:', error);
        }
      );
    }
  }

  cancelarEdicion() {
    this.usuarioEditando = null;
  }

  
}
