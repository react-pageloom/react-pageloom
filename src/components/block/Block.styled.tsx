import styled from '@emotion/styled';
import { SECONDARY } from '@src/constants/colors';
import { NAVBAR_HEIGHT } from '@src/constants/sizes';

export const Block = styled.section<{
	$snap: boolean;
	$fixedNav: boolean;
}>`
	width: 100%;
	min-height: 100dvh;
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
`;
