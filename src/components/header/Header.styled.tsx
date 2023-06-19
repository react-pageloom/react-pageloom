import styled from '@emotion/styled';
import { NAVBAR_HEIGHT, SCREEN_HEIGHT } from '@src/constants/sizes';

export const Header = styled.header<{
	$fixedNav: boolean;
	$snap: boolean;
}>`
	width: 100%;
	min-height: ${SCREEN_HEIGHT};
	margin-left: auto;
	margin-right: auto;
	position: relative;

	${({ $snap, $fixedNav }) =>
		$snap &&
		`
		scroll-snap-align: start;
		scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
	`}

	& > .loom-container_root {
		margin-top: 1px;
	}

	${({ $fixedNav }) =>
		$fixedNav &&
		`
		margin-top: ${NAVBAR_HEIGHT}px;
		min-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
		`}
`;
