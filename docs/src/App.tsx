import { PageBlock, PageHeader, PageWrapper } from 'react-pageloom';

function App() {
	return (
		<PageWrapper>
			<PageHeader
				sx={{
					backgroundColor: 'darkgreen',
				}}
			>
				<h1>Header</h1>
			</PageHeader>
			<PageBlock
				id="block-1"
				label="Block 1"
				sx={{
					backgroundColor: 'red',
				}}
			>
				<h1>Block 1</h1>
			</PageBlock>
			<PageBlock
				id="block-2"
				label="Block 2"
				sx={{
					backgroundColor: 'blue',
				}}
			>
				<h1>Block 2</h1>
			</PageBlock>
			<PageBlock
				id="block-3"
				label="Block 3"
				sx={{
					backgroundColor: 'green',
				}}
			>
				<h1>Block 3</h1>
			</PageBlock>
		</PageWrapper>
	);
}

export default App;
