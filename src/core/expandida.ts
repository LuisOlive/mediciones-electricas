import type { Mediciones, Mensurando } from './tipos'

import parcial from './parcial'
import mejoresValores from './mejoresValores'

const p = console.log
const { sqrt: raiz, floor: truncar } = Math

export default function expandida(mensurando: Mensurando, mediciones: Mediciones) {
  let suma = 0
  let sumaGradosEfectivos = 0
  const MVS = mejoresValores(mediciones)

  p('Los mejores valores', MVS)

  for (const variable of Object.keys(mediciones)) {
    p(`\n~(${variable})~`)

    // calculando la derivada parcial
    const df = parcial(mensurando, variable)
    const { tipoA, tipoB, gradosLibertadA, gradosLibertadB } = mediciones[variable]

    // mostrando la derivada parcial
    const y = df(MVS)
    p(`La derivada parcial respecto a ${variable}, evaluada es ${y}`)

    // calculando los factores cuadrados
    const df2a2 = y ** 2 * tipoA ** 2
    const df2b2 = y ** 2 * tipoB ** 2

    p(`Derivada al cuadrado por incertidumbre tipo A al cuadrado de ${variable} es ${df2a2 * 1e3}m`)
    p(`Derivada al cuadrado por incertidumbre tipo B al cuadrado de ${variable} es ${df2b2 * 1e3}m`)

    // sumando
    suma += df2a2 + df2b2
    sumaGradosEfectivos += df2a2 ** 2 / gradosLibertadA
    sumaGradosEfectivos += df2b2 ** 2 / gradosLibertadB
  }

  p(`\nLa suma de los coeficientes es ${suma * 1e3}m\n`)

  const incertidumbreCombinada = raiz(suma)
  p(`La incertidumbre combinada Uc es ${incertidumbreCombinada * 1e3}m`)

  const mejorEstimacion = mensurando(MVS)
  p(`La mejor estimación para el mensurando ${mejorEstimacion} ± ${(incertidumbreCombinada * 100) / mejorEstimacion}%`)

  const gradosEfectivosLibertad = truncar(incertidumbreCombinada ** 4 / sumaGradosEfectivos)
  p(`Los grados efectivos de libertad del modelo: ${gradosEfectivosLibertad}\n`)

  p('Buscar grado de confiabilidad en tabla t de student')
  p(`multiplique el valor en tabla por ${incertidumbreCombinada}`)
}
