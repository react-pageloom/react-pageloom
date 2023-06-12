const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const del = require('rollup-plugin-delete');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const typescript = require('rollup-plugin-typescript2');
const ttypescript = require('ttypescript');
const url = require('@rollup/plugin-url');
const pkg = require('./package.json');

module.exports = {
	input: 'src/index.tsx',
	output: [
		{
			format: 'cjs',
			dir: 'dist/cjs',
			preserveModules: true,
			preserveModulesRoot: 'src',
			exports: 'named',
		},
		{
			format: 'es',
			dir: 'dist/esm',
			preserveModules: true,
			preserveModulesRoot: 'src',
			exports: 'named',
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
		'./src',
	],
	plugins: [
		url(),
		peerDepsExternal(),
		typescript({
			typescript: ttypescript,
			tsconfig: './tsconfig.build.json',
		}),
		nodeResolve(),
		commonjs(),
		babel({
			babelHelpers: 'runtime',
			exclude: 'node_modules/**',
			extensions: ['.ts', '.tsx'],
		}),
		terser(),
		del({ targets: 'dist/*' }),
	],
};
