import styled from '@emotion/styled';

export const Wrapper = styled.div<{
	$snapScroll: boolean;
}>`
	width: 100%;
	min-height: 100dvh;
	margin: 0;
	padding: 0;
	overflow: auto;
	position: relative;

	${({ $snapScroll }) =>
		$snapScroll &&
		`
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		height: 100dvh;
	`}
`;

export const BlockContainer = styled.main`
	flex: 1;
`;
