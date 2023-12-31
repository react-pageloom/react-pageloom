import { Container, styled } from 'react-pageloom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LightFont } from './HeroContent';
import { StrongBlack } from './HowToUseBlock';
import { useState } from 'react';

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 100%;
	box-sizing: border-box;
`;
function CustomStylesBlock() {
	const [copied, setCopied] = useState(false);

	const handleCopyClick = () => {
		const codeText = `import { PageWrapper, PageHeader, 
  PageBlock, PageFooter } from 'react-pageloom';

const myTheme = {
  // Example theme object
	colors: {
		text: '#243c5a', // Deep Sea Blue
		background: '#f9f871', // Sun Glow
		primary: '#e84a5f', // Flamenco Red
		secondary: '#ff8474', // Salmon Pink
		navBackground: '#2a363b', // Swell Gray
		navText: '#fecea8', // Peach Orange
		activeLink: '#fe8a71', // Bittersweet
		hoverLink: '#e84a5f', // Flamenco Red
		mobileMenuBackground: '#2a363b', // Swell Gray
	},
};

function MyApp() {
  return (
    <PageWrapper theme={myTheme}>
      <PageHeader>
        <HeaderLogo>Logo</HeaderLogo>
      </PageHeader>
      <PageBlock id="block-1" label="Block 1">
        {/* your content here */}
      </PageBlock>
      <PageFooter>
        {/* your content here */}
      </PageFooter>
     </PageWrapper>
  );
}

export default MyApp;
`;

		navigator.clipboard.writeText(codeText);
		setCopied(true);

		// Reset 'copied' state to 'false' after 5 seconds
		setTimeout(() => {
			setCopied(false);
		}, 5000);
	};
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
				How to use Custom Styles?
			</h1>
			<FlexContainer>
				<LightFont
					style={{
						textAlign: 'center',
					}}
				>
					In case you want to customize the styles of the PageLoom components,
					you can do so by passing a theme object to the
					<StrongBlack>PageWrapper</StrongBlack> component. All the components
					will inherit the styles from the theme object. Available theme
					properties are listed below.
				</LightFont>
				<div style={{ position: 'relative' }}>
					<button
						style={{
							position: 'absolute',
							top: '20px',
							right: '10px',
							zIndex: '1',
						}}
						onClick={handleCopyClick}
					>
						{copied ? 'Copied!' : 'Copy'}
					</button>
					<div
						style={{
							width: '100%',
						}}
					>
						<SyntaxHighlighter language="jsx" style={coldarkDark}>
							{`import { PageWrapper, PageHeader, 
          PageBlock, PageFooter } from 'react-pageloom';

const myTheme = {
  // Example theme object
	colors: {
		text: '#243c5a', // Deep Sea Blue
		background: '#f9f871', // Sun Glow
		primary: '#e84a5f', // Flamenco Red
		secondary: '#ff8474', // Salmon Pink
		navBackground: '#2a363b', // Swell Gray
		navText: '#fecea8', // Peach Orange
		activeLink: '#fe8a71', // Bittersweet
		hoverLink: '#e84a5f', // Flamenco Red
		mobileMenuBackground: '#2a363b', // Swell Gray
	},
};

function MyApp() {
  
  return (
    <PageWrapper theme={myTheme}>
      <PageHeader>
        <HeaderLogo>Logo</HeaderLogo>
      </PageHeader>
      <PageBlock id="block-1" label="Block 1">
        <!-- your content here -->
      </PageBlock>
      <PageFooter>
        <!-- your content here -->
      </PageFooter>
     </PageWrapper>
    </PageWrapper>
  );
}

export default MyApp;
`}
						</SyntaxHighlighter>
					</div>
				</div>
				<LightFont
					style={{
						textAlign: 'center',
						margin: '2rem 0',
					}}
				>
					Use the <StrongBlack>styled</StrongBlack> function to create styled
					components that have access to the theme object. You can access theme
					colors and other theme properties in your component styles.
				</LightFont>
			</FlexContainer>
		</Container>
	);
}

export default CustomStylesBlock;
