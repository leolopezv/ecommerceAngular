import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { BlogComponent } from '../../views/blog/blog.component';
import { ContactoComponent } from '../../views/contacto/contacto.component';
import { InicioComponent } from '../../views/inicio/inicio.component';
import { TiendaComponent } from '../../views/tienda/tienda.component';
import { CarritoComponent } from '../../views/carrito/carrito.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, BlogComponent, ContactoComponent, InicioComponent, TiendaComponent, CarritoComponent, RouterModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
