import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/notu-react.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/esm/notu-react.js',
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: /\/stories\//
            }),
            postcss()
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/]
    }
];