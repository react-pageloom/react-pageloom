// emotion.d.ts
import '@emotion/react';
import { DefaultTheme } from './theme/index';

declare module '@emotion/react' {
	export interface Theme extends DefaultTheme {}
}
