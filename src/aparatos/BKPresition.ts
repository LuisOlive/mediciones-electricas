import type { Aparato } from '@/aparato'
import { porcentajeDe, media } from '@/estadistica'

export default class BKPresition implements Aparato {
  /** la exactitud se calculará conforme a la formula: (a)(lectura) + (b)(resoluación)
   * @param resolucion valor mínimo posible a medir
   * @param a porcentaje de la lectura obtenida
   * @param b numero de veces la resolución
   */
  constructor(readonly a: number, readonly b: number, readonly resolucion: number, public lecturas: number[] = []) {}

  __exactitud() {
    return porcentajeDe(media(this.lecturas), this.a) + this.b * this.resolucion
  }
}
