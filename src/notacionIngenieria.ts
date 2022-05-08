export function load(s: string) {
  if (!/\d+\.?\d*\s?[pnμumkMGT]?/.test(s)) return 0

  const num = s.split(/[pnμumkMGT]/)[0]
  const prefix = s.split(/\d|\./).reverse()[0].trim()

  // @ts-ignore
  return parseFloat(num) * 10 ** load.prefijos[prefix]
}

load.prefijos = {
  p: -12,
  n: -9,
  μ: -6,
  u: -6,
  m: -3,
  '': 0,
  k: 3,
  M: 6,
  G: 9,
  T: 12
}

export function dump(n: number, unit = '') {
  const m = Math.abs(n) // magnitud
  const signo = Math.sign(n)

  for (let a = -12; a <= 12; a += 3) {
    const N = m / 10 ** a
    // @ts-ignore
    if (N > 0 && N < 1000) return `${N * signo}${dump.prefijos[a]}${unit}`
  }

  return '0'
}

dump.prefijos = {
  '-12': 'p',
  '-9': 'n',
  '-6': 'μ',
  '-3': 'm',
  0: '',
  3: 'k',
  6: 'M',
  9: 'G',
  12: 'T'
}
