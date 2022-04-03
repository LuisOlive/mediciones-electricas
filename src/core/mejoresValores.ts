import type { Mediciones, Valores } from './tipos'

export default function mejoresValores(mediciones: Mediciones) {
  const ans: Valores = {}

  for (const clave of Object.keys(mediciones)) {
    ans[clave] = mediciones[clave].mejor
  }

  return ans
}
