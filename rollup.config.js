import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/rafsch.js',
    output: {
      file: 'dist/rafsch.js',
      format: 'cjs'
    },
    plugins: [buble()]
  },
  {
    input: 'src/rafsch.js',
    output: {
      name: 'rafsch',
      file: 'dist/rafsch.min.js',
      format: 'umd'
    },
    plugins: [buble(), uglify()]
  }
]
