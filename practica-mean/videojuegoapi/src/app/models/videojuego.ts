export class Videojuego{
  _id?: number;
  nombre: string;
  precio: string;
  iva: string;
  codigo: string;
  stock: string;

  constructor(nombre: string, precio: string, iva : string, codigo: string, stock: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.iva = iva;
        this.codigo = codigo;
        this.stock = stock;

  }

}
