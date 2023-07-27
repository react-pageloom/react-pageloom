import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@src/theme';
import { NAVBAR_HEIGHT } from '@src/constants/sizes';

export const Footer = styled.footer<{
	$snap: boolean;
	$fixedNav: boolean;
	theme: Theme;
}>`
	${({ theme, $snap, $fixedNav }) => css`
		width: 100%;
		min-height: 100px;
		background-color: ${theme.colors.secondary};
		color: ${theme.colors.text};
		display: flex;
		justify-content: center;
		align-items: center;

		${$snap &&
		css`
			scroll-snap-align: start;
			scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
		`}
	`}
`;
