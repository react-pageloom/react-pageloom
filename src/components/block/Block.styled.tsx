import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@src/theme';
import { NAVBAR_HEIGHT, SCREEN_HEIGHT } from '@src/constants/sizes';

export const Block = styled.section<{
	$snap: boolean;
	$fixedNav: boolean;
	theme: Theme;
}>`
	${({ theme, $snap, $fixedNav }) => css`
		width: 100%;
		min-height: ${SCREEN_HEIGHT};
		margin-left: auto;
		margin-right: auto;
		position: relative;
		background-color: ${theme.colors.background};
		color: ${theme.colors.text};

		${$snap &&
		css`
			scroll-snap-align: start;
			scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
		`}

		${$fixedNav &&
		css`
			min-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
		`}
	`}
`;
