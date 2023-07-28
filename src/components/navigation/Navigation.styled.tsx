import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@src/theme';
import { rgba } from '@src/utils/rgba';
import { SCREEN_MD } from '@src/constants/breakpoints';
import { NAVBAR_HEIGHT } from '@src/constants/sizes';

export const Nav = styled.nav<{ $fixed: boolean; theme: Theme }>`
	${({ theme, $fixed }) => css`
		box-sizing: border-box;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		border-bottom: 1px solid ${theme.colors.text};
		z-index: 1000;
		background-color: ${theme.colors.navBackground};
		color: ${theme.colors.navText};
		width: 100%;
		height: ${NAVBAR_HEIGHT}px;
		padding-left: 2em;
		padding-right: 2em;

		${$fixed &&
		css`
			position: fixed;
			top: 0;
		`}

		@media (min-width: ${SCREEN_MD + 1}px) {
			& a.loom-nav_link {
				text-decoration: none;
				color: ${theme.colors.navText};
				background-color: ${theme.colors.navBackground};
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				transition: all 100ms ease-in-out;
				cursor: pointer;
			}
		}

		& a.loom-nav_link:hover {
			background-color: ${theme.colors.hoverLink};
			color: ${theme.colors.background};
		}

		& a.loom-nav_active {
			background-color: ${theme.colors.activeLink};
			color: ${theme.colors.background};
		}
	`}
`;

export const NavMobileButton = styled.button<{
	theme: Theme;
}>`
	${({ theme }) => css`
		display: none;
		border: none;
		background-color: transparent;
		color: ${theme.colors.navText};
		font-size: 1.5rem;
		cursor: pointer;

		@media (max-width: ${SCREEN_MD}px) {
			display: block;
		}
	`}
`;

export const NavMobileMenu = styled.ul<{ $isOpen: boolean; theme: Theme }>`
	${({ theme, $isOpen }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: ${NAVBAR_HEIGHT}px;
		left: 0;
		right: 0;
		background-color: ${rgba(theme.colors.mobileMenuBackground, 0.8)};
		color: ${theme.colors.navText};
		list-style: none;
		padding: 0;
		margin: 0;
		transition: all 100ms ease-in-out;
		transform: translateY(-100%);
		opacity: 0;
		pointer-events: none;
		backdrop-filter: blur(10px);

		${$isOpen &&
		css`
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		`}
	`}
`;

export const NavMobileMenuItem = styled.li<{
	theme: Theme;
}>`
	${({ theme }) => css`
		width: 100%;

		& > a.loom-nav_link {
			box-sizing: border-box;
			display: block;
			width: 100%;
			text-align: center;
			text-decoration: none;
			padding: 1em;
			border-bottom: 1px solid ${theme.colors.navBackground};
			border-radius: 0;
			cursor: pointer;
		}
	`}
`;

export const NavLogoContainer = styled.a`
	cursor: pointer;
	text-decoration: none;

	&:hover,
	&:focus,
	&:active {
		text-decoration: none;
	}
`;

export const NavLinksContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;

	@media (max-width: ${SCREEN_MD}px) {
		display: none;
	}
`;

export const NavDrawerLinkContainer = styled.div<{
	theme: Theme;
}>`
	${({ theme }) => css`
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;

		& a.loom-nav_link {
			text-decoration: none;
			color: ${theme.colors.navText};
			background-color: ${theme.colors.navBackground};
			padding: 0.5rem 1rem;
			border-radius: 0.5rem;
			transition: all 100ms ease-in-out;
			cursor: pointer;
		}
	`}
`;
