export type Valores = { [key: string]: number }

/** Una función que recibe un objeto de números y devuelve el reultado físico de las variables*/
export type Mensurando = ((_: Valores) => number) & { __parciales?: { [key: string]: Mensurando } }

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
