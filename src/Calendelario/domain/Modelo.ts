export class Modelo {
  constructor(
    readonly id: number,
    readonly nombre: string,
    readonly fecha_inicio: Date,
    readonly fecha_fin: Date,
    readonly estatus: string
  ) {}
}
