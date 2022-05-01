import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'umd'
  },
  plugins: [
    typescript(),
    alias({
      entries: [{ find: 'src', replacement: resolve('./src') }]
    })
  ]
}
