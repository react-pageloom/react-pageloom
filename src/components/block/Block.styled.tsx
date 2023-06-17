import styled from '@emotion/styled';
import { SECONDARY } from '@src/constants/colors';
import { MIN_HEIGHT, NAVBAR_HEIGHT, SCREEN_HEIGHT } from '@src/constants/sizes';

export const Block = styled.section<{
	$snap: boolean;
	$fixedNav: boolean;
}>`
	width: 100%;
	height: ${SCREEN_HEIGHT};
	height: max(${SCREEN_HEIGHT}, ${MIN_HEIGHT});
	margin-left: auto;
	margin-right: auto;
	overflow: auto;
	position: relative;
	background-color: ${SECONDARY};

	${({ $snap, $fixedNav }) =>
		$snap &&
		`
		scroll-snap-align: start;
		scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
	`}

	${({ $fixedNav }) =>
		$fixedNav &&
		`
		max-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
		min-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);

		& > .loom-container_root {
			height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
		}
	`}
`;
