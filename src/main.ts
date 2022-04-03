import type { Mediciones, Valores } from './core/tipos'

import expandida from './core/expandida'
import { constanteFisica, exactamente, medicionesRepetidas } from './core/fuentesIncertidumbre'
import CA865 from './aparatos/TermometroCA865'
import BK_Presition from './aparatos/Aparato'
import Triplett from './aparatos/Tripplett60NA'

function mensurando({ VM1, VM2, R1 }: Valores) {
  return R1 * (VM1 / VM2 - 1)
}

mensurando.__parciales = {
  VM1({ VM2, R1 }: Valores) {
    console.log('---------en la derivada real---------')
    return R1 / VM2
  },

  VM2({ VM1, VM2, R1 }: Valores) {
    console.log('---------en la derivada real---------')
    return (-R1 * VM1) / VM2 ** 2
  },

  R1({ VM1, VM2 }: Valores) {
    console.log('---------en la derivada real---------')
    return VM1 / VM2 - 1
  }
}

const mediciones: Mediciones = {
  VM1: medicionesRepetidas(new Triplett(15), 15, 15, 15, 15, 15, 15, 15, 15, 15, 15),
  VM2: medicionesRepetidas(
    new BK_Presition(1e-3, 0.025, 2),
    3.0132e-2,
    2.9788e-2,
    2.9907e-2,
    2.9952e-2,
    3.0227e-2,
    2.995e-2,
    2.9819e-2,
    2.9888e-2,
    3.0237e-2,
    2.9802e-2
  ),
  R1: constanteFisica(2, 0.01)
}

expandida(mensurando, mediciones)
