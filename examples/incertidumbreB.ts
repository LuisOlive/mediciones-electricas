import { exactitud, incertidumbreB } from '@/aparato'
import { BKPresition, TermometroCA865 } from '@/aparatos'

const multimetro = new BKPresition(0.025, 2, 1e-3, [25.003, 25.1043, 25.1501, 24.6213, 25.051, 25.0711, 24.9808, 25.0258, 25.0686, 25.0427])
const termometro = new TermometroCA865([22.4549, 22.4503, 22.4541, 22.4439, 22.4528, 22.4453, 22.4508, 22.4611, 22.446, 22.4507])

console.log(`exactitud del bk presition: ${exactitud(multimetro)}`)
console.log(`incertidumbre del bk presition: ${incertidumbreB(multimetro)}`)

console.log(`exactitud del termometro: ${exactitud(termometro)}`)
console.log(`incertidumbre del termometro: ${incertidumbreB(termometro)}`)
