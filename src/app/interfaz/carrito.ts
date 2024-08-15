export interface Carrito {
  id?: number;
  cantidad: number;
  foto: {
    id: number;
    imagen: string;
    descripcion: string;
    talla: string;
    color: string;
    precio: number;
  }
}
