import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './views/blog/blog.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RecursosService } from './servicios/recursos.service';

// Importa otros módulos de Angular según sea necesario

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    MenuComponent,
    // Declara otros componentes aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Importa otros módulos de Angular aquí
  ],
  providers: [RecursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
