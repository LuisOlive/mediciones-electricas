import type { Mediciones, Mensurando } from '@/tipos'
import incertidumbreCombinada from '@/incertidumbreCombinada'
import gradosLibertad from '@/gradosLibertad'
import coeficienteConfiabilidad from '@/coeficienteConfiabilidad'

export default function incertidumbreExpandida(mensurando: Mensurando, mediciones: Mediciones) {
  const gl = gradosLibertad(mensurando, mediciones)

  return incertidumbreCombinada(mensurando, mediciones) * coeficienteConfiabilidad(gl)
}
