// @ts-check
const {
  incertidumbreCombinada,
  incertidumbreExpandida,
  gradosLibertad,
  coeficienteConfiabilidad,
  fuentesIncertidumbre: { medicionesRepetidas, constanteFisica },
  aparatos: { BKPresition, TermometroCA865 }
} = require('../dist')

function mensurando({ V, R0, alpha, T }) {
  return V ** 2 / (R0 * (1 + alpha * (T - 70)))
}

const mediciones = {
  V: medicionesRepetidas(new BKPresition(0.025, 2, 1e-3, [25.003, 25.1043, 25.1501, 24.6213, 25.051, 25.0711, 24.9808, 25.0258, 25.0686, 25.0427])),
  alpha: constanteFisica(3.39e-3),
  R0: constanteFisica(22.5),
  T: medicionesRepetidas(new TermometroCA865([22.4549, 22.4503, 22.4541, 22.4439, 22.4528, 22.4453, 22.4508, 22.4611, 22.446, 22.4507]))
}

console.log(`incertidumbre combinada: ${incertidumbreCombinada(mensurando, mediciones)}`)
console.log(`grados de libertad: ${gradosLibertad(mensurando, mediciones)}`)
console.log(`coeficiente de confiabilidad: ${coeficienteConfiabilidad(gradosLibertad(mensurando, mediciones))}`)

console.log(`incertidumbre expandida: ${incertidumbreExpandida(mensurando, mediciones)}`)
