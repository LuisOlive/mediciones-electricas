import { Aparato } from '@/tipos'
import exactitud from './exactitud'
import incertidumbreB from './incertidumbreB'

export default function aparato(): Aparato {
  return {
    lecturas: []
  }
}

export { Aparato } from '@/tipos'

export { exactitud, incertidumbreB }
