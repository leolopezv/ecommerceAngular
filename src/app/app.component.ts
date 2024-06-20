import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogData } from './interfaz/foto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MenuComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clienteAngular';
  blogData: BlogData | null = null;  // Cambiado a BlogData

  constructor(private recursosService: RecursosService) {}

  ngOnInit(): void {
    this.recursosService.obtenerDatos().subscribe(respuesta => {
      this.blogData = respuesta;
    });
  }
}


