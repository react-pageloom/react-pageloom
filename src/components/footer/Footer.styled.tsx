import styled from '@emotion/styled';
import { PRIMARY, WHITE } from '@src/constants/colors';
import { NAVBAR_HEIGHT } from '@src/constants/sizes';

export const Footer = styled.footer<{
	$snap: boolean;
	$fixedNav: boolean;
}>`
	width: 100%;
	min-height: 100px;
	background-color: ${PRIMARY};
	color: ${WHITE};
	display: flex;
	justify-content: center;
	align-items: center;

	${({ $snap, $fixedNav }) =>
		$snap &&
		`
	scroll-snap-align: start;
	scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
`}
`;
