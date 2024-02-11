import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [
    //As far as I can tell...
    //This does the main packaging into cjs & esm versions of the library
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/notu-react.js',
                format: 'cjs',
                sourcemap: false
            },
            {
                file: 'dist/esm/notu-react.js',
                format: 'esm',
                sourcemap: false
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
        ],
        external: [
            'react'
        ]
    },
    //And this then takes the esm type files and just combines them down into a single file
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
        plugins: [dts()]
    }
];