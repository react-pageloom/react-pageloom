import React from 'react';
import styled, { keyframes } from 'styled-components';

const crawlAnimation = keyframes`
  0% {
    top: -100px;
    transform: rotateX(20deg) translateZ(0);
  }
  90% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
  100% {
    top: 200px;
    transform: rotateX(0deg) translateZ(0);
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
	min-height: 60vh;
	top: -25px;
	z-index: 1;
`;

const StarWarsSection = styled.section`
	display: flex;
	justify-content: center;
	position: relative;
	height: 800px;
	color: #fff;
	font-family: 'Pathway Gothic One', sans-serif;
	font-size: 500%;
	font-weight: 600;
	letter-spacing: 6px;
	line-height: 150%;
	perspective: 400px;
	text-align: justify;
`;

const Crawl = styled.div`
	position: relative;
	top: 99999px;
	transform-origin: 50% 100%;
	animation: ${crawlAnimation} 60s linear infinite;
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
