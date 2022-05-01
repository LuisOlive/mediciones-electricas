export default function coeficienteConfiabilidad(gradosLibertad: number) {
  try {
    return [
      1e9, 13.97, 4.527, 3.307, 2.869, 2.649, 2.517, 2.429, 2.366, 2.32, 2.284, 2.255, 2.231, 2.212, 2.195, 2.181, 2.169, 2.158, 2.149, 2.14, 2.133,
      2.126, 2.12, 2.115, 2.11, 2.105, 2.101, 2.097, 2.093, 2.09, 2.087
    ][gradosLibertad]
  } catch {
    if (gradosLibertad < 35) return 2.074
    if (gradosLibertad < 40) return 2.064
    if (gradosLibertad < 50) return 2.051
    if (gradosLibertad < 100) return 2.025
    if (gradosLibertad < 200) return 2.016
    return 2
  }
}
