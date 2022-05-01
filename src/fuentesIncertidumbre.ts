import type { Medicion, Aparato } from '@/tipos'
import { media, incertidumbreA, gradosLibertad, porcentajeDe } from '@/estadistica'
import { incertidumbreB } from '@/aparato'

const gradosLibertadA = 1
const gradosLibertadB = 8
const tipoA = 0

export function medicionesRepetidas(aparato: Aparato): Medicion {
  const { lecturas } = aparato

  const mejor = media(lecturas)
  const tipoA = incertidumbreA(lecturas)
  const tipoB = incertidumbreB(aparato)
  const gradosLibertadA = gradosLibertad(lecturas)

  return { tipoA, tipoB, mejor, gradosLibertadA, gradosLibertadB }
}

export function constanteFisica(mejor: number, porcentajeTolerancia = 1): Medicion {
  const tipoB = porcentajeDe(mejor, porcentajeTolerancia) / Math.sqrt(3)

  return { mejor, tipoA, tipoB, gradosLibertadA, gradosLibertadB }
}
