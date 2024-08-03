import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecursosService } from '../../servicios/recursos.service';
import { Usuario } from '../../interfaz/usuario';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [RecursosService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  title = 'Blog de usuarios';
  usuarios: Usuario[] = [];
  usuarioEditando: Usuario | null = null;

  constructor(private recursosService: RecursosService) {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.recursosService.obtenerUsuarios().subscribe(respuesta => {
      this.usuarios = respuesta as Array<Usuario>;
    });
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
