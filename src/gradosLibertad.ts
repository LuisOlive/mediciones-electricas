import type { Mediciones, Mensurando } from '@/tipos'
import coeficientes from '@/coeficientes'
import { suma } from '@/estadistica'
import incertidumbreCombinada from './incertidumbreCombinada'

export default function gradosLibertad(mensurando: Mensurando, mediciones: Mediciones) {
  // prettier-ignore
  return Math.floor(
    incertidumbreCombinada(mensurando, mediciones) ** 4 
      / suma(coeficientes(mensurando, mediciones).map(x => 
          x.sencibilidadA ** 2 / x.gradosLibertadA
          + x.sencibilidadB ** 2 / x.gradosLibertadB
      ))
  )
}
