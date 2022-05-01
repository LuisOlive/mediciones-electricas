import type { Aparato } from '@/aparato'
import { porcentajeDe } from '@/estadistica'

export default class Triplett60NA implements Aparato {
  constructor(readonly escalaCompleta: number, public lecturas: number[] = []) {}

  __exactitud() {
    return porcentajeDe(this.escalaCompleta, 1.5)
  }
}
