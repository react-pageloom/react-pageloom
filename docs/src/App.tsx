import {
	HeaderLogo,
	PageBlock,
	PageHeader,
	PageWrapper,
	PageFooter,
} from 'react-pageloom';
import { styled } from 'react-pageloom';
import PropsTable from './components/PropsTable';
import HowToUseBlock from './components/HowToUseBlock';
import HeroContent from './components/HeroContent';
import Footer from './components/Footer';
import { ReactLogoText } from './components/Logo';
import ClassListTable from './components/ClassListTable';
import CustomStylesBlock from './components/StylingBlock';

const StyledSelect = styled('select')(({ theme }) => ({
	border: 'none',
	borderRight: `8px solid transparent`,
	// @ts-ignore
	background: theme.colors.activeLink,
	// @ts-ignore
	color: theme.colors.text,
	fontSize: 'inherit',
	fontFamily: 'inherit',
	padding: '0.5rem 1rem',
	borderRadius: '0.5rem',
	cursor: 'pointer',
	transition: 'all 100ms ease-in-out',
	'&:hover': {
		filter: 'brightness(1.2)',
	},
}));

function App() {
	const theme = {
		colors: {
			text: '#f8f9fa',
			background: '#ffffff',
			primary: '#46458CE6',
			secondary: 'transparent',
			navBackground: '#f8f9fa',
			navText: '#333333',
			activeLink: '#46458C',
			hoverLink: '#46458C',
			mobileMenuBackground: '#f8f9fa',
		},
	};

	return (
		<PageWrapper
			fixedNav
			drawerNav
			theme={theme}
			extraNavComponent={
				<StyledSelect name="theme" id="theme-select">
					<option value="sunshine">Sunshine</option>
					<option value="rainbow">Rainbow</option>
					<option value="unicorn">Unicorn</option>
					<option value="moon">Moon</option>
				</StyledSelect>
			}
		>
			<PageHeader>
				<HeaderLogo
					sx={{
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							filter: 'brightness(3)',
						},
					}}
				>
					<ReactLogoText />
					PageLoom
				</HeaderLogo>
				<HeroContent />
			</PageHeader>
			<PageBlock
				id="how-to-use"
				label="How to use?"
				sx={{
					background: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
					filter: 'contrast(1.8)',
				}}
			>
				<HowToUseBlock />
			</PageBlock>
			<PageBlock
				id="optional-props"
				label="Props"
				sx={{
					background: `linear-gradient(90deg, #46458CAA 0%, #6554AF99 100%),
					url(https://grainy-gradients.vercel.app/noise.svg)`,
					filter: 'contrast(1.5)',
				}}
			>
				<PropsTable />
			</PageBlock>
			<PageBlock
				id="custom-styles"
				label="Custom Global Styles"
				sx={{
					background: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
					filter: 'contrast(1.8)',
				}}
			>
				<CustomStylesBlock />
			</PageBlock>
			<PageBlock
				id="css-classes"
				label="CSS Classes"
				sx={{
					background: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
					filter: 'contrast(1.5)',
				}}
			>
				<ClassListTable />
			</PageBlock>
			<PageFooter>
				<Footer />
			</PageFooter>
		</PageWrapper>
	);
}

export default App;
