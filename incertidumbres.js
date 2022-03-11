const p = console.log
const { sqrt } = Math
const sqrt3 = sqrt(3) 

const datos = [ 2, 4, 6 ]
const voltajes = [ 9.87162, 9.87162, 10.0447, 10.2906, 9.87658, 9.9522, 9.80702, 9.62661, 9.41532, 10.2019 
]
const temperaturas = [ 22.4444, 22.4444, 22.4528, 22.449, 22.4589, 22.4456, 22.4476, 22.4499, 22.4547, 22.4526
]

// --------------- main ----------------

varianza(datos)

desviacionEstandar(datos)	

incertidumbreA(datos)
incertidumbreA(voltajes)
incertidumbreA(temperaturas)

incertidumbreDesvEst({ length: 50 }) * 100

rangoError(34.5, .025)

incertidumbreB(.75, 10.85e-6, 50, 10e-9)

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
  return [
    porcentaje(num, 100 - error),
    porcentaje(num, 100 + error)
  ]
}

function porcentaje(total, porc) {
  return total * porc / 100
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
  return t * sqrt( varianza(nums) / n )
}

function varianza(nums) {
  const n = nums.length
  const mu = media(nums)
  let sumaRestasCuadradas = 0
  
  for(const x of nums) {
    sumaRestasCuadradas += (x - mu) ** 2
  }
  
  return sumaRestasCuadradas / (n - 1)
}

function desviacionEstandar(nums) {
  return sqrt(varianza(nums))
}

function suma(nums) {
  let res = 0
  
  for(const x of nums) {
    res += x
  }
  
  return res
}

function media(nums) {
  return suma(nums) / nums.length
}