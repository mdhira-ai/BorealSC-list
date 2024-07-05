import terser from "@rollup/plugin-terser";
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import rollupPluginFlow from "rollup-plugin-flow";

export default {
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  external: [
    'react',
    'react-dom',
    'react-window'
  ],
  plugins: [terser(),
    babel({
    babelHelpers: 'bundled',
    extensions: ['.js', '.jsx'],
    presets: ['@babel/preset-react'],
  }),
  // commonjs(),
  // rollupPluginFlow(),
  nodeResolve(
    {
      browser: true,
      extensions: ['.js', '.jsx']
    }
  )
  ]
};