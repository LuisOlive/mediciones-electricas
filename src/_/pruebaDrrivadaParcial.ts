import parcial from '../core/parcial'

type X = { [key: string]: number }

function z({ x, y }: X) {
  return 2 * x ** 3 * y - y ** 2 + x ** 4 // 2x³y + x^4 - y²
}

const Z0 = { x: 2, y: 3 }

/**
 * z'(x) = 6x²y + 4x³ -> 6*4*3 + 4*8 = 104
 * z'(y) = 2x³ - 2y ->  2*8 - 6 = 10
 */

const zx = parcial(z, 'x')
const zy = parcial(z, 'y')

console.log(`La derivada parcial de z respecto a x es igual a ${zx(Z0)}`) // obtenido 104.00000860499858
console.log(`La derivada parcial de z respecto a y es igual a ${zy(Z0)}`) // obtenido 10.00000082740371
