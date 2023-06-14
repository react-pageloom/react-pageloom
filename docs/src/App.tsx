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
		<PageWrapper>
			{/* HEADER */}
			<PageHeader
				sx={{
					backgroundColor: 'lightsalmon',
				}}
			>
				<HeaderLogo>Logo</HeaderLogo>
				<Container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'lightblue',
						padding: '1rem',
					}}
				>
					<h1
						style={{
							textAlign: 'center',
							fontSize: '2rem',
						}}
					>
						<span
							style={{
								fontWeight: 'bold',
							}}
						>
							PageLoom
						</span>{' '}
						is a powerful, flexible library for React.js that simplifies the
						process of creating stunning, interactive webpage layouts. It
						leverages the concept of "Blocks" and "Headers", providing an
						intuitive, component-based system to build your application's user
						interface.
					</h1>
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
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',

						justifyContent: 'space-around',
					}}
				>
					<h1
						style={{
							textAlign: 'center',
							fontSize: '2rem',
						}}
					>
						How to use?
					</h1>
					<div>
						<SyntaxHighlighter language="tsx" style={dark}>
							{`
import {
	HeaderLogo,
	PageBlock,
	PageHeader,
	PagetFooter,
	PageWrapper,
	Container,
} from 'react-pageloom';

<PageWrapper>
	<PageHeader>
		<HeaderLogo>Logo</HeaderLogo>
		<Container>
			{/* your content here */}
		</Container>
	</PageHeader>
	<PageBlock id="block-1" label="Block 1">
		<Container>
			{/* your content here */}
		</Container>
	</PageBlock>
	<PageBlock id="block-2" label="Block 2">
		{/* your content here */}
	</PageBlock>
	<PageFooter>
		{/* your content here */}
	</PageFooter>
</PageWrapper>
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
				{' '}
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',

						justifyContent: 'space-around',
					}}
				>
					<h1
						style={{
							textAlign: 'center',
							fontSize: '2rem',
						}}
					>
						Optional props
					</h1>
					<div>sx - custom styles for the block</div>
					<div>PageWrapper</div>
					<div>fixedNav - use fixed navigation</div>
					<div>snapScroll - use snap scrolling</div>
				</Container>
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
