class Participante {
  nombre: string;
  categoria: Categoria;
  laboratorio: Laboratorio;
  computadora: Computadora;

  constructor(nombre: string, categoria: Categoria, laboratorio: Laboratorio, computadora: Computadora) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.laboratorio = laboratorio;
    this.computadora = computadora;
  }
}