import type { Aparato } from '@/aparato'

export default class CA865 implements Aparato {
  constructor(public lecturas: number[] = []) {}

  __exactitud() {
    return 0.05
  }
}
