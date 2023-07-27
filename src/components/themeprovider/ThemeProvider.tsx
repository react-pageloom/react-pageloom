import { Theme, ThemeProvider } from '@emotion/react';
import defaultTheme, { DefaultTheme } from '@src/theme';

interface ThemeWrapperProps {
	theme?: Partial<Theme>;
	children: React.ReactNode;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
	theme = {},
	children,
}) => {
	const mergedTheme = {
		...defaultTheme,
		...theme,
		colors: {
			...defaultTheme.colors,
			...((theme as DefaultTheme)?.colors || {}),
		},
	};

	return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};
