export function rangoError(num: number, error: number) {
  return [porcentajeDe(num, 100 - error), porcentajeDe(num, 100 + error)]
}

export function porcentajeDe(total: number, porcentaje: number) {
  return (total * porcentaje) / 100
}

export function incertidumbreDesvEst(nums: number[]) {
  return 1 / Math.sqrt(2 * gradosLibertad(nums))
}

export function gradosLibertad(nums: number[]) {
  return nums.length - 1
}

export function incertidumbreA(nums: number[]) {
  const n = nums.length
  const t = n > 9 ? 1 : [0, 0, 7, 2.3, 1.7, 1.4, 1.3, 1.3, 1.2, 1.2][n]

  return t * Math.sqrt(varianza(nums) / n)
}

export function varianza(nums: number[]) {
  const n = nums.length
  const mu = media(nums)
  let sumaRestasCuadradas = 0

  for (const x of nums) {
    sumaRestasCuadradas += (x - mu) ** 2
  }

  return sumaRestasCuadradas / (n - 1)
}

export function desviacionEstandar(nums: number[]) {
  return Math.sqrt(varianza(nums))
}

export function suma(nums: number[]) {
  let res = 0

  for (const x of nums) {
    res += x
  }

  return res
}

export function media(nums: number[]) {
  return suma(nums) / nums.length
}
