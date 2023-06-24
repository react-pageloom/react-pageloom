import { Container } from 'react-pageloom';
import ScrollText from './ScrollText';
import Logo from './Logo';
import { styled } from 'styled-components';
import { Strong } from './HowToUseBlock';

export const LightFont = styled.span`
	font-weight: 300;
	font-size: 1.2rem;
	background-color: rgba(255, 255, 255, 0.2);
	padding: 0.5rem;
	line-height: 1.8;
	text-align: center;
`;

export const Text = styled.h1`
	font-size: 2rem;
	line-height: 1.5;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

function HeroContent() {
	return (
		<Container
			fluid
			centered={false}
			sx={{
				gap: '1rem',
				justifyContent: 'space-around',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					backgroundColor: '#1D267D',
					zIndex: -1,
				}}
			>
				<source src="public/videos/hero_video.mp4" type="video/mp4" />
			</video>
			<ScrollText title={<Logo />}>
				<Text>
					PageLoom is a powerful, flexible library for React.js that simplifies
					the process of creating stunning, interactive webpage layouts. It
					leverages the concept of <Strong>Blocks</Strong>, providing an
					intuitive, component-based system to build your application's user
					interface.
				</Text>
				<br />
				<br />
				<br />
				<br />
				<LightFont>
					As an example, this part of the page is constructed using the{' '}
					<code>PageHeader</code> component.
				</LightFont>
			</ScrollText>
		</Container>
	);
}

export default HeroContent;
