import { porcentajeDe, incertidumbreB } from '../core/estadistica'
import type { IAparato } from '../core/tipos'

export default class Triplett60NA implements IAparato {
  constructor(readonly escalaCompleta: number) {}

  exactitud() {
    return porcentajeDe(this.escalaCompleta, 1.5)
  }

  tipoB() {
    return incertidumbreB(this.exactitud())
  }
}
