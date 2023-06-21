import {
	HeaderLogo,
	PageBlock,
	PageHeader,
	PageWrapper,
	PageFooter,
} from 'react-pageloom';
import PropsTable from './components/PropsTable';
import HowToUseBlock from './components/HowToUseBlock';
import HeroContent from './components/HeroContent';
import Footer from './components/Footer';
import { ReactLogoText } from './components/Logo';
import ClassListTable from './components/ClassListTable';

function App() {
	return (
		<PageWrapper fixedNav>
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
					backgroundColor: '#1D267D',
				}}
			>
				<HowToUseBlock />
			</PageBlock>
			<PageBlock
				id="optional-props"
				label="Props"
				sx={{
					backgroundColor: '#635ba0',
				}}
			>
				<PropsTable />
			</PageBlock>
			<PageBlock
				id="css-classes"
				label="CSS Classes"
				sx={{
					backgroundColor: '#b8b1d4',
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
