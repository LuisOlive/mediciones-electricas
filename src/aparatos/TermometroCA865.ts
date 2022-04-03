import { IAparato } from '../core/tipos'

export default class CA865 implements IAparato {
  exactitud() {
    return 0.05
  }

  tipoB() {
    return this.exactitud() / Math.sqrt(3)
  }
}
