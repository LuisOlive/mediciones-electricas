import type { IAparato, Medicion } from './tipos'

import { media, incertidumbreA, gradosLibertad } from './estadistica'

const gradosLibertadA = 1
const gradosLibertadB = 8
const tipoA = 0
const tipoB = 0

export function medicionesRepetidas(aparato: IAparato, ...lecturas: number[]): Medicion {
  const mejor = media(lecturas)
  const tipoA = incertidumbreA(lecturas)
  const tipoB = aparato.tipoB(mejor)
  const gradosLibertadA = gradosLibertad(lecturas)

  return { tipoA, tipoB, mejor, gradosLibertadA, gradosLibertadB }
}

export function constanteFisica(mejor: number, porcentajeTolerancia = 1): Medicion {
  const tipoB = (mejor * porcentajeTolerancia) / (100 * Math.sqrt(3))

  return { mejor, tipoA, tipoB, gradosLibertadA, gradosLibertadB }
}

export function exactamente(mejor: number): Medicion {
  return { mejor, tipoA, tipoB, gradosLibertadA, gradosLibertadB }
}
