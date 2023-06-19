import { Container } from 'react-pageloom';

function HeroContent() {
	return (
		<Container
			fluid
			centered
			sx={{
				gap: '1rem',
				justifyContent: 'space-around',
				// backgroundColor: 'lightblue',
				// background: 'url(bg_image.svg)',
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
					zIndex: -1,
				}}
			>
				<source src="public/videos/hero_video.mp4" type="video/mp4" />
			</video>
			<h1
				style={{
					textAlign: 'center',
					fontSize: '2rem',
					maxWidth: 'clamp(20vw, 80%, 30em)',
					flexGrow: 0.5,
				}}
			>
				<span
					style={{
						fontWeight: 'bold',
					}}
				>
					PageLoom
				</span>{' '}
				is a powerful, flexible library for React.js that simplifies the process
				of creating stunning, interactive webpage layouts. It leverages the
				concept of "Blocks", providing an intuitive, component-based system to
				build your application's user interface.
			</h1>
			<h2>
				This is a <code>PageHeader</code> component
			</h2>
		</Container>
	);
}

export default HeroContent;
