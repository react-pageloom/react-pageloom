import styled from '@emotion/styled';
import { BLACK, PRIMARY, WHITE } from '@src/constants/colors';
import { MIN_HEIGHT, NAVBAR_HEIGHT, SCREEN_HEIGHT } from '@src/constants/sizes';

export const Header = styled.header<{
	$fixedNav: boolean;
	$snap: boolean;
}>`
	width: 100%;
	min-height: max(${SCREEN_HEIGHT}, ${MIN_HEIGHT});
	margin-left: auto;
	margin-right: auto;
	overflow: auto;
	position: relative;

	${({ $snap, $fixedNav }) =>
		$snap &&
		`
		scroll-snap-align: start;
		scroll-margin-top: ${$fixedNav ? `${NAVBAR_HEIGHT}px` : '0'};
	`}

	& > .loom-container_root {
		margin-top: 1px;
		height: max(
			calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px - 2px),
			${MIN_HEIGHT}
		);
	}

	${({ $fixedNav }) =>
		$fixedNav &&
		`
		margin-top: ${NAVBAR_HEIGHT}px;
		min-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);
		max-height: calc(${SCREEN_HEIGHT} - ${NAVBAR_HEIGHT}px);

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

	& a.loom-nav_link:hover {
		background-color: ${PRIMARY};
		color: ${WHITE};
	}

	& a.loom-nav_active {
		background-color: ${PRIMARY};
		color: ${WHITE};
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
`;
