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

function App() {
	return (
		<PageWrapper>
			<PageHeader>
				<HeaderLogo>PageLoom</HeaderLogo>
				<HeroContent />
			</PageHeader>
			<PageBlock
				id="how-to-use"
				label="How to use?"
				sx={{
					backgroundColor: 'tomato',
				}}
			>
				<HowToUseBlock />
			</PageBlock>
			<PageBlock
				id="optional-props"
				label="Props"
				sx={{
					backgroundColor: 'lightblue',
				}}
			>
				<PropsTable />
			</PageBlock>
			<PageFooter>
				<h2>
					This is a <code>PageFooter</code> component
				</h2>
			</PageFooter>
		</PageWrapper>
	);
}

export default App;
