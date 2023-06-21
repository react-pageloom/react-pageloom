import React from 'react';
import styled, { keyframes } from 'styled-components';
import { WHITE } from '../constants';

const crawlAnimation = keyframes`
  0% {
    top: -200px;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: 0;
		transform: rotateX(25deg) translateZ(-100px);
  }
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const Fade = styled.div`
	position: relative;
	width: 100%;
	top: -25px;
	z-index: 1;
	height: 100%;
`;

const StarWarsSection = styled.section`
	display: flex;
	justify-content: center;
	position: relative;
	height: 100%;
	color: ${WHITE};
	font-family: 'Pathway Gothic One', sans-serif;
	font-size: 500%;
	font-weight: 600;
	letter-spacing: 6px;
	perspective: 800px;
	text-align: center;
	font-size: 3em;

	@media (max-width: 768px) {
		perspective: 300px;
		font-size: 1.5em;
	}
`;

const Crawl = styled.div`
	position: relative;
	top: 99999px;
	transform-origin: 50% 100%;
	animation: ${crawlAnimation} 10s linear forwards;
`;

const Title = styled.div`
	font-size: 90%;
	text-align: center;
`;

const ScrollText = ({
	title,
	children,
}: {
	title: string | React.ReactNode;
	children: React.ReactNode;
}) => {
	return (
		<Container>
			<Fade />
			<StarWarsSection>
				<Crawl>
					<Title>{title}</Title>
					<p>{children}</p>
				</Crawl>
			</StarWarsSection>
		</Container>
	);
};

export default ScrollText;
