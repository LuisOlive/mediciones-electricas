import type { Aparato as IAparato } from '@/tipos'

import { porcentajeDe, media } from '@/estadistica'

/** @deprecated */
export default class Aparato implements IAparato {
  /**
   *
   * @param resolucion
   * @param a
   * @param b
   * @param lecturas
   */
  constructor(readonly resolucion: number, readonly a: number, readonly b: number, public lecturas: number[]) {}

  __exactitud() {
    return porcentajeDe(media(this.lecturas), this.a) + this.b * this.resolucion
  }
}
