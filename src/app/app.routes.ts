import { Routes } from '@angular/router';

import { BlogComponent } from '../app/views/blog/blog.component';
import { ContactoComponent } from '../app/views/contacto/contacto.component';
import { InicioComponent } from '../app/views/inicio/inicio.component';
import { TiendaComponent } from '../app/views/tienda/tienda.component';
import { CarritoComponent } from '../app/views/carrito/carrito.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tienda', component: TiendaComponent},
  { path: 'carrito', component: CarritoComponent}
];
