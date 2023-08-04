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
import { useTheme, ThemeProps } from './theme';
import { useState } from 'react';

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
	const [themeName, setThemeName] = useState<ThemeProps>('light');
	const theme = useTheme(themeName);

	return (
		<PageWrapper
			fixedNav
			drawerNav
			theme={theme}
			extraNavComponent={
				<StyledSelect
					name="theme"
					id="theme-select"
					onChange={(event) => setThemeName(event.target.value as ThemeProps)}
				>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="retro">Rainbow</option>
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
					background: theme.colors.blockOneBackground,
					filter: 'contrast(1.8)',
				}}
			>
				<HowToUseBlock />
			</PageBlock>
			<PageBlock
				id="optional-props"
				label="Props"
				sx={{
					background: theme.colors.blockTwoBackground,
					filter: 'contrast(1.5)',
				}}
			>
				<PropsTable />
			</PageBlock>
			<PageBlock
				id="custom-styles"
				label="Custom Global Styles"
				sx={{
					background: theme.colors.blockThreeBackground,
					filter: 'contrast(1.8)',
				}}
			>
				<CustomStylesBlock />
			</PageBlock>
			<PageBlock
				id="css-classes"
				label="CSS Classes"
				sx={{
					background: theme.colors.blockFourBackground,
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
