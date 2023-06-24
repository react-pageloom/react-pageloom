import styled, { keyframes } from 'styled-components';
import PageLoomLogo from '../assets/pl_logo.png';

const starEffect = keyframes`
	0% {
		opacity: 0.7;
		filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.5));
	}
	50% {
		opacity: 1;
		filter: drop-shadow(0px 0px 16px rgba(255, 255, 255, 0.5));
	}
	100% {
		opacity: 0.7;
		filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.5));
	}
`;

const LogoImage = styled.img`
	max-width: 500px;
	aspect-ratio: 1 / 1;

	animation: ${starEffect} 3s ease-in-out infinite;

	@media (max-width: 768px) {
		max-width: 250px;
	}
`;

function ReactLogo() {
	return <LogoImage src={PageLoomLogo} alt="PageLoom Logo" />;
}

export function ReactLogoText() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0.5 0 86.5 95"
			style={{
				width: '48px',
				aspectRatio: '1 / 1',
				marginRight: '8px',
				filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
			}}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M37 25.5H1V61L14.5 70.5H25.75H37C43.6667 67.8333 51.5 61 51.5 48C51.5 37 41.3333 26.5 37 25.5ZM16.5 61V37C25.75 37 37 37 37 48C37 61 25.75 61 16.5 61Z"
				fill="url(#paint0_diamond_801_3041)"
			/>
			<path
				d="M14.5 70.5L1 61V94.5H14.5V70.5Z"
				fill="url(#paint1_linear_801_3041)"
			/>
			<path
				d="M14.5 70.5L1 61V94.5H14.5V70.5Z"
				fill="#51359C"
				fill-opacity="0.46"
			/>
			<path
				d="M41 22C46.1137 22 57.107 25.7 60.1705 40.5C60.2074 37.9387 60.2219 34.649 60.2208 31C55.5974 14.6 45.4805 6.83333 41 5V22Z"
				fill="url(#paint2_linear_801_3041)"
			/>
			<path
				d="M60 0.5H41V5C45.4805 6.83333 55.5974 14.6 60.2208 31C60.2178 20.9984 60.0975 8.29792 60 0.5Z"
				fill="url(#paint3_linear_801_3041)"
			/>
			<path
				d="M37 25.5C41.3333 26.5 51.5 37 51.5 48C51.5 61 43.6667 67.8333 37 70.5H86.5V55H56.5C57.5 53.5 59.6 49.5 60 45.5C60.0807 44.6929 60.1356 42.9221 60.1705 40.5C57.107 25.7 46.1137 22 41 22V25.5H37Z"
				fill="url(#paint4_linear_801_3041)"
			/>
			<path
				d="M37 25.5H1V61M37 25.5C41.3333 26.5 51.5 37 51.5 48C51.5 61 43.6667 67.8333 37 70.5M37 25.5H41V22M37 70.5H86.5V55H56.5C57.5 53.5 59.6 49.5 60 45.5C60.0807 44.6929 60.1356 42.9221 60.1705 40.5M37 70.5H25.75H14.5M14.5 70.5L1 61M14.5 70.5V94.5H1V61M41 22C46.1137 22 57.107 25.7 60.1705 40.5M41 22V5M60.1705 40.5C60.2074 37.9387 60.2219 34.649 60.2208 31M41 5V0.5H60C60.0975 8.29792 60.2178 20.9984 60.2208 31M41 5C45.4805 6.83333 55.5974 14.6 60.2208 31M16.5 37V61C25.75 61 37 61 37 48C37 37 25.75 37 16.5 37Z"
				stroke="black"
			/>
			<defs>
				<radialGradient
					id="paint0_diamond_801_3041"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(37.5 30) rotate(135) scale(83.4386 75.8936)"
				>
					<stop offset="0.0977753" stop-color="#5E81D5" />
					<stop offset="0.395536" stop-color="#516CC6" />
					<stop offset="0.65986" stop-color="#6C6FC7" />
					<stop offset="1" stop-color="#5E81D5" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint1_linear_801_3041"
					x1="43.75"
					y1="0.5"
					x2="43.75"
					y2="94.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.270938" stop-color="#100F55" />
					<stop offset="1" stop-color="#080727" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_801_3041"
					x1="13"
					y1="6.5"
					x2="75"
					y2="59"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#6967DE" />
					<stop offset="1" stop-color="#0A8DD2" />
				</linearGradient>
				<linearGradient
					id="paint3_linear_801_3041"
					x1="43.75"
					y1="0.5"
					x2="59"
					y2="19"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#0C0128" />
					<stop offset="1" stop-color="#033D86" />
				</linearGradient>
				<linearGradient
					id="paint4_linear_801_3041"
					x1="89.5"
					y1="3"
					x2="29"
					y2="72"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.0508141" stop-color="#00001F" />
					<stop offset="1" stop-color="#4A3091" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default ReactLogo;
