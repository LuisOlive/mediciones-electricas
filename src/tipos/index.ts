export type Valores = { [key: string]: number }

/** Una función que recibe un objeto de números y devuelve el reultado físico de las variables*/
export type Mensurando = ((_: Valores) => number) & {
  /**
   * sobrecarga al comportamiento de la función sobrecarga(Mensurando)
   */
  __parcial?: (key: string) => Mensurando
}

export interface Medicion {
  tipoA: number
  tipoB: number
  mejor: number
  gradosLibertadA: number
  gradosLibertadB: number
}

export type Mediciones = { [key: string]: Medicion }

export interface IAparato {
  exactitud: (lectura: number) => number
  tipoB: (lectura: number) => number
}

/**
 * aparato que mide alguna magnitud fisica y al que se le asocian incertidumbres
 */
export interface Aparato {
  /**
   * sobrecarga al comportamiento de la función exactitud(Aparato)
   */
  __exactitud?: () => number

  /**
   * sobrecarga al comportamiento de la función incertidumbreB(Aparato)
   */
  __incertidumbreB?: () => number

  /**
   * lecturas del aparato en condiciones de repetibilidad
   */
  lecturas: number[]
}
