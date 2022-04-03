import { IAparato } from '../core/tipos'

import { porcentajeDe } from '../core/estadistica'

export default class Aparato implements IAparato {
  constructor(readonly resolucion: number, readonly a: number, readonly b: number) {}

  exactitud(lectura: number) {
    return porcentajeDe(lectura, this.a) + this.b * this.resolucion
  }

  tipoB(lectura: number) {
    return this.exactitud(lectura) / Math.sqrt(3)
  }
}
