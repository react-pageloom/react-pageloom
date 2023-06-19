import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Container } from 'react-pageloom';
import { styled } from 'styled-components';

const DescriptionWrapper = styled.div`
	width: 100%;
	padding: 1em;
	margin: 0;
	background-color: #ffeebb;
	box-sizing: border-box;
`;

const ComponentDescription = styled.div`
	font-size: 1.2rem;
	color: #000;
	margin: 1rem 0;
	padding: 0.2em 0.4em;
	border-bottom: 1px solid #000;
`;

export const Strong = styled.span`
	font-weight: 600;
	background-color: #fff;
	color: #000;
	border-radius: 0.25rem;
	margin-right: 0.25rem;
	padding: 0 0.25rem;
`;

function HowToUseBlock() {
	return (
		<Container
			centered
			sx={{
				justifyContent: 'space-around',
			}}
		>
			<div>
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
				<DescriptionWrapper>
					<ComponentDescription>
						<Strong>PageWrapper:</Strong> Serves as the parent component
						encompassing the entire page.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>PageHeader:</Strong> Designates the header section of the
						page. Ideal for top-level navigation or introductory content.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>PageBlock:</Strong> Represents a main content section of the
						page. Utilize multiple <Strong>PageBlocks</Strong> to structure your
						page content.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>PageFooter:</Strong> Specifies the footer section of the
						page, perfect for secondary information or links.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>Container (optional):</Strong> A versatile container for
						content within <Strong>PageBlocks</Strong>,{' '}
						<Strong>PageHeader</Strong>, or <Strong>PageFooter</Strong>. Use it
						to center your content and ensure responsiveness.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>HeaderLogo (optional):</Strong> Use this within the{' '}
						<Strong>PageHeader</Strong>
						to display your logo.
					</ComponentDescription>
				</DescriptionWrapper>
			</div>
			<h2>
				This is a <code>PageBlock</code> component
			</h2>
		</Container>
	);
}

export default HowToUseBlock;
