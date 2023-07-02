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
import { styled } from 'styled-components';

const CardContainer = styled.div`
	background-color: #f2f2f2;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	width: '100%';
`;

const CardTitle = styled.h2`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const CardSubtitle = styled.h3`
	font-size: 16px;
	color: #888888;
`;

const Card = ({ title, subtitle }: { title: string; subtitle: string }) => {
	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<CardSubtitle>{subtitle}</CardSubtitle>
		</CardContainer>
	);
};

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
					backgroundColor: '#46458C',
				}}
			>
				<PropsTable />
			</PageBlock>
			<PageBlock
				id="css-classes"
				label="CSS Classes"
				sx={{
					backgroundColor: '#1D267D',
				}}
			>
				<ClassListTable />
			</PageBlock>
			<PageBlock
				id="grid-class"
				label="Grid Class"
				gridContainer
				sx={{
					backgroundColor: '#46458C',
				}}
			>
				<Card title="Card 1" subtitle="Subtitle" />
				<Card title="Card 2" subtitle="Subtitle" />
				<Card title="Card 3" subtitle="Subtitle" />
				<Card title="Card 4" subtitle="Subtitle" />
				<Card title="Card 5" subtitle="Subtitle" />
				<Card title="Card 6" subtitle="Subtitle" />
				<Card title="Card 7" subtitle="Subtitle" />
			</PageBlock>

			<PageFooter>
				<Footer />
			</PageFooter>
		</PageWrapper>
	);
}

export default App;
