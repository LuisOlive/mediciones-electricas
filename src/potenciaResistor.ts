import type { Mediciones, Valores } from './core/tipos'

import expandida from './core/expandida'
import { constanteFisica, exactamente, medicionesRepetidas } from './core/fuentesIncertidumbre'
import CA865 from './aparatos/TermometroCA865'
import Aparato from './aparatos/Aparato'

function mensurando({ V, R0, alpha, T, T0 }: Valores) {
  return V ** 2 / (R0 * (1 + alpha * (T - T0)))
}

const mediciones: Mediciones = {
  V: medicionesRepetidas(new Aparato(1e-3, 0.025, 2), 25.003, 25.1043, 25.1501, 24.6213, 25.051, 25.0711, 24.9808, 25.0258, 25.0686, 25.0427),
  R0: constanteFisica(22.5),
  alpha: constanteFisica(3.39e-3),
  T: medicionesRepetidas(new CA865(), 22.4549, 22.4503, 22.4541, 22.4439, 22.4528, 22.4453, 22.4508, 22.4611, 22.446, 22.4507),
  T0: exactamente(70)
}

expandida(mensurando, mediciones)
