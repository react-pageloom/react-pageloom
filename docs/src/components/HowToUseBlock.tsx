import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Container } from 'react-pageloom';
import { styled } from 'styled-components';
import { WHITE } from '../constants';
import { LightFont } from './HeroContent';

export const DescriptionWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	box-sizing: border-box;

	@media (max-width: 1094px) {
		width: 100%;
	}
`;
export const ComponentDescription = styled.div`
	font-size: 1rem;
	color: ${WHITE};
	padding: 0.2em 0.4em;
	border-bottom: 1px solid ${WHITE};
	line-height: 2;

	@media (max-width: 1094px) {
		font-size: 0.8rem;
	}
`;

export const Strong = styled.span`
	font-weight: 600;
	background-color: ${WHITE};
	color: rgb(17, 27, 39);
	border-radius: 0.2rem;
	margin-right: 0.2rem;
	padding: 0 0.2rem;
	padding: 0.2em 0.4em;
	text-align: center;
`;

export const StrongBlack = styled(Strong)`
	background-color: rgb(17, 27, 39);
	color: ${WHITE};
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1em;
	width: 100%;
	box-sizing: border-box;

	@media (max-width: 1094px) {
		flex-direction: column;
	}
`;

function HowToUseBlock() {
	return (
		<Container
			centered
			sx={{
				justifyContent: 'space-around',
				padding: '2rem 0',
				overflow: 'hidden',
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					fontSize: '2rem',
					paddingBottom: '1rem',
				}}
			>
				How to use?
			</h1>
			<FlexContainer>
				<div
					style={{
						boxSizing: 'border-box',
						width: '100%',
						padding: '0',
						margin: '0',
					}}
				>
					<SyntaxHighlighter language="tsx" style={coldarkDark}>
						{`<PageWrapper>
  <PageHeader>
    <HeaderLogo>Logo</HeaderLogo>
    <Container>
      {/* Your content here */}
    </Container>
  </PageHeader>
  <PageBlock id="block-1" label="About">
    <Container>
      {/* Your content here */}
    </Container>
  </PageBlock>
  <PageBlock id="block-2" label="Location">
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
						page. Utilize multiple <StrongBlack>PageBlocks</StrongBlack> to
						structure your page content.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>PageFooter:</Strong> Specifies the footer section of the
						page, perfect for secondary information or links.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>Container (optional):</Strong> A versatile container for
						content within <StrongBlack>PageBlocks</StrongBlack>,{' '}
						<StrongBlack>PageHeader</StrongBlack>, or{' '}
						<StrongBlack>PageFooter</StrongBlack>. Use it to center your content
						and ensure responsiveness.
					</ComponentDescription>

					<ComponentDescription>
						<Strong>HeaderLogo (optional):</Strong> Use this within the{' '}
						<StrongBlack>PageHeader</StrongBlack>
						to display your logo.
					</ComponentDescription>
				</DescriptionWrapper>
			</FlexContainer>
			<LightFont
				style={{
					textAlign: 'center',
					margin: '2rem 0',
				}}
			>
				Add as many <StrongBlack>PageBlocks</StrongBlack> as you need to. The
				navigation will automatically update to reflect the blocks you have
				added.
			</LightFont>
			<LightFont>
				This is a <code>PageBlock</code> component
			</LightFont>
		</Container>
	);
}

export default HowToUseBlock;
