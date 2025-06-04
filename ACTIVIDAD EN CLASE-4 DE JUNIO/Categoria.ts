class Categoria {
  nombre: string;
  laboratorios: Laboratorio[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.laboratorios = [];
  }

  agregarLaboratorio(laboratorio: Laboratorio) {
    this.laboratorios.push(laboratorio);
  }
}