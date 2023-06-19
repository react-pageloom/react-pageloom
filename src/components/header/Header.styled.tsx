import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { SCREEN_MD } from '@src/constants/breakpoints';
import { BLACK, PRIMARY, WHITE } from '@src/constants/colors';
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

export const Nav = styled.nav<{
	$fixed: boolean;
}>`
	box-sizing: border-box;
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	border-bottom: 1px solid ${WHITE};
	z-index: 1000;
	background-color: ${WHITE};
	color: ${BLACK};
	width: 100%;
	height: ${NAVBAR_HEIGHT}px;
	padding-left: 2em;
	padding-right: 2em;

	${({ $fixed }) =>
		$fixed &&
		`
		position: fixed;
		top: 0;
	`}

	@media (min-width: ${SCREEN_MD + 1}px) {
		& a.loom-nav_link {
			text-decoration: none;
			color: ${BLACK};
			background-color: ${WHITE};
			padding: 0.5rem 1rem;
			border-radius: 0.5rem;
			transition: all 100ms ease-in-out;
			cursor: pointer;
			user-select: none;
		}
	}

	& a.loom-nav_link:hover {
		background-color: ${PRIMARY};
		color: ${WHITE};
	}

	& a.loom-nav_active {
		background-color: ${PRIMARY};
		color: ${WHITE};
	}
`;

export const NavMobileButton = styled.button`
	display: none;
	border: none;
	background-color: transparent;
	color: ${BLACK};
	font-size: 1.5rem;
	cursor: pointer;
	user-select: none;

	@media (max-width: ${SCREEN_MD}px) {
		display: block;
	}
`;

export const NavMobileMenu = styled.ul<{
	$isOpen: boolean;
}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: ${NAVBAR_HEIGHT}px;
	left: 0;
	right: 0;
	background-color: ${rgba(WHITE, 0.8)};
	color: ${BLACK};
	list-style: none;
	padding: 0;
	margin: 0;
	transition: all 100ms ease-in-out;
	transform: translateY(-100%);
	opacity: 0;
	pointer-events: none;
	backdrop-filter: blur(10px);

	${({ $isOpen }) =>
		$isOpen &&
		`
		transform: translateY(0);
		opacity: 1;
		pointer-events: all;
	`}
`;

export const NavMobileMenuItem = styled.li`
	width: 100%;

	& > a.loom-nav_link {
		box-sizing: border-box;
		display: block;
		width: 100%;
		text-align: center;
		text-decoration: none;
		padding: 1em;
		border-bottom: 1px solid ${WHITE};
		border-radius: 0;
		cursor: pointer;
	}
`;

export const NavLogoContainer = styled.a`
	user-select: none;
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
