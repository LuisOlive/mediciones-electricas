const p = console.log
const { sqrt } = Math
const sqrt3 = sqrt(3)

const corrientes = [385.25, 383.31, 383.83, 386.18, 386.18, 381.69, 383.83, 382.11, 383.88, 383.88]
const voltajes = [12.05, 12.05, 12.05, 12, 12.1, 12.08333333, 12.125, 12.1, 12.16666667, 12.05]
const temperaturas = [21.9, 21.9, 22, 22, 22, 22, 22, 22, 22, 22]

// --------------- main ----------------

mostrarDatos(voltajes)
mostrarDatos(corrientes)
mostrarDatos(temperaturas)

function mostrarDatos(nums) {
  p(
    '\nvalor medio:',
    media(nums),
    // '\nvarianza std:',
    // varianza(nums),
    // '\ndesviacion std:',
    // desviacionEstandar(nums),
    // '\nlo otro:',
    // desviacionEstandar(nums) / nums.length,
    '\n tipo A',
    incertidumbreA(nums),
    '-----------------'
  )
}

// --------------- funciones --------------

function incertidumbreB(porc, lecturaAparato, b, resolucion) {
  /*
  condiciones:
  - intervalo simétrico
  - distribución uniforme
  - probabilidad de 1 en todos los puntos
  */
  return exactitudNominal(porc, lecturaAparato, b, resolucion) / sqrt3
}

function exactitudNominal(porc, lecturaAparato, b, resolucion) {
  return porcentaje(lecturaAparato, porc) + b * resolucion
}

function rangoError(num, error) {
  return [porcentaje(num, 100 - error), porcentaje(num, 100 + error)]
}

function porcentaje(total, porc) {
  return (total * porc) / 100
}

function incertidumbreDesvEst(nums) {
  return 1 / sqrt(2 * gradosLibertad(nums))
}

function gradosLibertad(nums) {
  return nums.length - 1
}

function incertidumbreA(nums) {
  const n = nums.length
  const t = n > 9 ? 1 : [0, 0, 7, 2.3, 1.7, 1.4, 1.3, 1.3, 1.2, 1.2][n]
  return t * sqrt(varianza(nums) / n)
}

function varianza(nums) {
  const n = nums.length
  const mu = media(nums)
  let sumaRestasCuadradas = 0

  for (const x of nums) {
    sumaRestasCuadradas += (x - mu) ** 2
  }

  return sumaRestasCuadradas / (n - 1)
}

function desviacionEstandar(nums) {
  return sqrt(varianza(nums))
}

function suma(nums) {
  let res = 0

  for (const x of nums) {
    res += x
  }

  return res
}

function media(nums) {
  return suma(nums) / nums.length
}
