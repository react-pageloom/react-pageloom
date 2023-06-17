import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Container } from 'react-pageloom';

function HowToUseBlock() {
	return (
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
			<div
				style={{
					width: '100%',
					padding: '0',
					margin: '0',
				}}
			>
				<SyntaxHighlighter language="tsx" style={dark}>
					{`
import { HeaderLogo, PageBlock, PageHeader, 
	PageFooter, PageWrapper, Container} from 'react-pageloom';
				
<PageWrapper>
  <PageHeader>
    <HeaderLogo>Logo</HeaderLogo>
    <Container>
      {/* Your content here */}
    </Container>
  </PageHeader>
  <PageBlock id="block-1" label="Block 1">
    <Container>
      {/* Your content here */}
    </Container>
  </PageBlock>
  <PageBlock id="block-2" label="Block 2">
    {/* Your content here */}
  </PageBlock>
  <PageFooter>
    {/* Your content here */}
  </PageFooter>
</PageWrapper>
`}
				</SyntaxHighlighter>
			</div>
			<h2>
				This is a <code>PageBlock</code> component
			</h2>
		</Container>
	);
}

export default HowToUseBlock;
