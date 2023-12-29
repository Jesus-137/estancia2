export class Modelo {
  constructor(
    readonly id: number,
    readonly nombre: string,
    readonly tipo_local: string,
    readonly medidas: string,
    readonly nplanta: number,
    readonly id_cliente: number
  ) {}
}
