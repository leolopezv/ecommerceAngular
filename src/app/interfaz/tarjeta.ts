export interface Tarjeta {
  id?: number;
  banco: string;
  numero: string;
  titular: string;
  fecha: Date;
  codigo: string;
  usuario_id: number;
}
