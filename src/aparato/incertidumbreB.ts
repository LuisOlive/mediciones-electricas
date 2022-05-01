import exactitud from './exactitud'
import { Aparato } from './index'

/**
 * calcula la incertidumbre tipo B de un aparato de medición
 * @param aparato aparato al que se le evalúa
 */
export default function incertidumbreB(aparato: Aparato) {
  return aparato.__incertidumbreB?.() ?? exactitud(aparato) / Math.sqrt(3)
}
