import type { Mensurando, Mediciones } from '@/tipos'

import coeficientes from '@/coeficientes'
import { suma } from '@/estadistica'

export default function incertidumbreCombinada(mensurando: Mensurando, mediciones: Mediciones) {
  return Math.sqrt(suma(coeficientes(mensurando, mediciones).map(x => x.sencibilidadA + x.sencibilidadB)))
}
