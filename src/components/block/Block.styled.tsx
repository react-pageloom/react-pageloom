import styled from '@emotion/styled';
import { SECONDARY } from '@src/constants/colors';
import { NAVBAR_HEIGHT, SCREEN_HEIGHT } from '@src/constants/sizes';

export const Block = styled.section<{
	$snap: boolean;
	$fixedNav: boolean;
}>`
	width: 100%;
	min-height: ${SCREEN_HEIGHT};
	margin-left: auto;
	margin-right: auto;
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
		min-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
	`}
`;

export const GridWrapper = styled.div({
	display: 'grid',
	gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
	gap: '10px',
	justifyContent: 'center',
	alignItems: 'center',
	justifyItems: 'center',
});
