import type { Mediciones, Mensurando } from '@/tipos'
import parcial from '@/parcial'
import mejoresValores from '@/mejoresValores'

export default function coeficientes(mensurando: Mensurando, mediciones: Mediciones) {
  const ans = []

  const mejores = mejoresValores(mediciones)

  for (const variable of Object.keys(mediciones)) {
    const y = parcial(mensurando, variable)(mejores)
    const { tipoA, tipoB, gradosLibertadA, gradosLibertadB } = mediciones[variable]

    ans.push({
      variable,
      sencibilidadA: (y * tipoA) ** 2,
      sencibilidadB: (y * tipoB) ** 2,
      gradosLibertadA,
      gradosLibertadB
    })
  }

  return ans
}
