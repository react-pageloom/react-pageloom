export interface Theme {
	colors: {
		text: string;
		headerText: string;
		background: string;
		primary: string;
		secondary: string;
		navBackground: string;
		navText: string;
		activeLink: string;
		hoverLink: string;
		mobileMenuBackground: string;
	};
}
export type ThemeProps = 'light' | 'dark' | 'retro' | 'pastel';

const darkTheme = {
	colors: {
		text: '#f8f9fa',
		headerText: '#6b6bff',
		background: '#40414f', // Adjusted the background color to a lighter shade of black
		primary: '#6b6bff',
		secondary: 'transparent',
		navBackground: '#1a1a1a',
		navText: '#f8f9fa',
		activeLink: '#6b6bff',
		hoverLink: '#6b6bff',
		mobileMenuBackground: '#1a1a1a',
		blockOneBackground: `linear-gradient(0, #40414f 50%, #40414f 50%), url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockTwoBackground: `linear-gradient(90deg, #40414f 50%, #40414f 50%), url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockThreeBackground: `linear-gradient(90deg, #40414f 50%, #40414f 50%), url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockFourBackground: `linear-gradient(0, #40414f 50%, #40414f 50%), url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockFiveBackground: `linear-gradient(0, #40414f 50%, #40414f 50%), url(https://grainy-gradients.vercel.app/noise.svg)`,
	},
};

const lightTheme = {
	colors: {
		text: '#f8f9fa',
		background: '#ffffff',
		headerText: '#46458CE6',
		primary: '#46458CE6',
		secondary: 'transparent',
		navBackground: '#f8f9fa',
		navText: '#40414f',
		activeLink: '#46458C',
		hoverLink: '#46458C',
		mobileMenuBackground: '#f8f9fa',
		blockOneBackground: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockTwoBackground: `linear-gradient(90deg, #46458CAA 0%, #6554AF99 100%),
		url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockThreeBackground: `linear-gradient(90deg, #6554AF99 0%, #46458CAA 100%),
		url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockFourBackground: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
		blockFiveBackground: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
	},
};
const retroTheme = {
	colors: {
		text: '#f8f8f8', // Slightly off-white text
		headerText: '#cca300',
		background: '#7b002b', // Dark red background
		primary: '#cca300', // Dark gold primary color
		secondary: '#006b99', // Dark blue secondary color
		navBackground: '#262626', // Dark gray navigation background
		navText: '#f8f8f8', // Slightly off-white navigation text
		activeLink: '#cca300', // Dark gold active link color
		hoverLink: '#006b99', // Dark blue hover link color
		mobileMenuBackground: '#262626', // Dark gray mobile menu background
		blockOneBackground: '#b24d19', // Dark orange block background
		blockTwoBackground: '#5b7f33', // Dark green block background
		blockThreeBackground: '#00739d', // Dark blue block background
		blockFourBackground: '#8a0eaf', // Dark purple block background
		blockFiveBackground: '#b28900', // Dark yellow block background
	},
};

const pastelTheme = {
	colors: {
		text: '#000', // Dark gray text
		background: '#f0f0f0', // Very light gray background
		headerText: '#40414f',
		primary: '#80c0c0', // Soft turquoise primary color
		secondary: '#ffc0cb', // Light pink secondary color
		navBackground: '#f8f8f8', // Off-white navigation background
		navText: '#565656', // Dark gray navigation text
		activeLink: '#80c0c0', // Soft turquoise active link color
		hoverLink: '#ffc0cb', // Light pink hover link color
		mobileMenuBackground: '#f8f8f8', // Off-white mobile menu background
		blockOneBackground: '#ffcc80', // Light orange block background
		blockTwoBackground: '#c0eb75', // Soft green block background
		blockThreeBackground: '#b39ddb', // Lavender block background
		blockFourBackground: '#ffb74d', // Peach block background
		blockFiveBackground: '#ffd54f', // Light yellow block background
	},
};

export const useTheme = (themeMode: ThemeProps) => {
	switch (themeMode) {
		case 'light':
			return lightTheme;
		case 'dark':
			return darkTheme;
		case 'retro':
			return retroTheme;
		case 'pastel':
			return pastelTheme;
		default:
			return lightTheme;
	}
};
