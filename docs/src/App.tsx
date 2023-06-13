import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PageFooter } from 'react-pageloom';
import {
	HeaderLogo,
	PageBlock,
	PageHeader,
	PageWrapper,
	Container,
} from 'react-pageloom';

function App() {
	return (
		<PageWrapper snapScroll fixedNav>
			{/* HEADER */}
			<PageHeader
				sx={{
					backgroundColor: 'lightsalmon',
				}}
			>
				<HeaderLogo>Logo</HeaderLogo>
				<Container>
					<h1>Header</h1>
				</Container>
			</PageHeader>
			{/* BLOCKS */}
			<PageBlock
				id="block-1"
				label="Block 1"
				sx={{
					backgroundColor: 'tomato',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Container>
					<h1>How to use?</h1>
					<div
						style={{
							maxWidth: '500px',
						}}
					>
						<SyntaxHighlighter language="tsx" style={dark}>
							{`
import { PageFooter } from 'react-pageloom';

<PageFooter>
	<h1>Footer</h1>
</PageFooter>
			`}
						</SyntaxHighlighter>
					</div>
				</Container>
			</PageBlock>
			<PageBlock
				id="block-2"
				label="Block 2"
				sx={{
					backgroundColor: 'lightblue',
				}}
			>
				<h1>Block 2</h1>
			</PageBlock>
			<PageBlock
				id="block-3"
				label="Block 3"
				sx={{
					backgroundColor: 'lightgreen',
				}}
			>
				<h1>Block 3</h1>
			</PageBlock>
			{/* FOOTER */}
			<PageFooter>
				<h1>Footer</h1>
			</PageFooter>
		</PageWrapper>
	);
}

export default App;
