import {
	HeaderLogo,
	PageBlock,
	PageHeader,
	PageWrapper,
	PageFooter,
	GridContainer,
} from 'react-pageloom';
import PropsTable from './components/PropsTable';
import HowToUseBlock from './components/HowToUseBlock';
import HeroContent from './components/HeroContent';
import Footer from './components/Footer';
import { ReactLogoText } from './components/Logo';
import ClassListTable from './components/ClassListTable';

function App() {
	return (
		<PageWrapper fixedNav drawerNav>
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
				id="css-classes"
				label="CSS Classes"
				sx={{
					background: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
					filter: 'contrast(1.8)',
				}}
			>
				<ClassListTable />
			</PageBlock>
			<PageBlock
				id="grid-container"
				label="Grid Container"
				sx={{
					background: `linear-gradient(0, #1D267DAA 0%, #46458CAA 100%),
    url(https://grainy-gradients.vercel.app/noise.svg)`,
					filter: 'contrast(1.8)',
				}}
			>
				<GridContainer>
					<div>Test</div>
					<div>Test</div>
					<div>Test</div>
					<div>Test</div>
					<div>Test</div>
				</GridContainer>
			</PageBlock>
			<PageFooter>
				<Footer />
			</PageFooter>
		</PageWrapper>
	);
}

export default App;
