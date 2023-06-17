import styled from '@emotion/styled';
import { SCREEN_HEIGHT } from '@src/constants/sizes';

export const Wrapper = styled.div<{
	$snapScroll: boolean;
}>`
	width: 100%;
	min-height: ${SCREEN_HEIGHT};
	margin: 0;
	padding: 0;
	overflow: auto;
	position: relative;

	${({ $snapScroll }) =>
		$snapScroll &&
		`
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
		height: ${SCREEN_HEIGHT};
	`}
`;

export const BlockContainer = styled.main`
	flex: 1;
`;
