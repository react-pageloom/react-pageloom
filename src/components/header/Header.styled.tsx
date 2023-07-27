import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@src/theme';
import { NAVBAR_HEIGHT, SCREEN_HEIGHT } from '@src/constants/sizes';

export const Header = styled.header<{
	$fixedNav: boolean;
	$snap: boolean;
	theme: Theme;
}>`
	${({ theme, $snap, $fixedNav }) => css`
		width: 100%;
		min-height: ${SCREEN_HEIGHT};
		margin-left: auto;
		margin-right: auto;
		position: relative;
		background-color: ${theme.colors.secondary};
		color: ${theme.colors.text};

		${$snap &&
		css`
			scroll-snap-align: start;
			scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
		`}

		& > .loom-container_root {
			margin-top: 1px;
		}

		${$fixedNav &&
		css`
			margin-top: ${NAVBAR_HEIGHT}px;
			min-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
		`}
	`}
`;
