import { Theme as EmotionTheme } from '@emotion/react';

export interface DefaultTheme {
	colors: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
		navBackground: string;
		navText: string;
		activeLink: string;
		hoverLink: string;
		mobileMenuBackground: string;
	};
}

export type Theme = EmotionTheme & DefaultTheme;

export const theme: Theme = {
	colors: {
		text: '#333333',
		background: '#ffffff',
		primary: '#007BFF',
		secondary: '#80c1ff',
		navBackground: '#f8f9fa',
		navText: '#333333',
		activeLink: '#0056b3',
		hoverLink: '#0056b3',
		mobileMenuBackground: '#f8f9fa',
	},
};

export default theme;
