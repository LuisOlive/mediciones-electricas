import { media, porcentajeDe } from 'src/estadistica'
import { Aparato } from './index'

/**
 * calcula la exactitud nominal de un aparato de medición
 * @param aparato aparato al que se le evalúa
 */
export default function exactitud(aparato: Aparato) {
  return aparato.__exactitud?.() ?? porcentajeDe(media(aparato.lecturas), 1)
}
