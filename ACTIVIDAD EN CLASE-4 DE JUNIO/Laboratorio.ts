class Laboratorio {
  nombre: string;
  categoria: Categoria;
  computadoras: Computadora[];

  constructor(nombre: string, categoria: Categoria) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.computadoras = [];
  }

  agregarComputadora(computadora: Computadora) {
    this.computadoras.push(computadora);
  }
}