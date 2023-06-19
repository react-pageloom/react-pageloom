/** @jsxImportSource theme-ui */
import { createElement, forwardRef, useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { classNames } from '@src/utils/classNames';
import { SCREEN_MD } from '@src/constants/breakpoints';
import {
	Nav,
	NavLinksContainer,
	NavLogoContainer,
	NavMobileButton,
	NavMobileMenu,
	NavMobileMenuItem,
} from './Navigation.styled';

export const PageMobileNav = ({
	blockLinks,
}: {
	blockLinks?: React.ReactNode[];
}) => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > SCREEN_MD) {
				setIsMobileNavOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<NavMobileButton
				id="loom-header_nav-mobile-button"
				onClick={() => setIsMobileNavOpen((prev) => !prev)}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{isMobileNavOpen ? (
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					) : (
						<path
							d="M4 6H20M4 12H20M4 18H20"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					)}
				</svg>
			</NavMobileButton>
			<NavMobileMenu $isOpen={isMobileNavOpen}>
				{blockLinks &&
					blockLinks.map((link: React.ReactNode, index: number) => (
						<NavMobileMenuItem
							key={`mobile-menu-item-${index}`}
							className="loom-header_nav-mobile-menu-item"
						>
							{createElement((link as React.ReactElement).type, {
								...(link as React.ReactElement).props,
								onClick: () => setIsMobileNavOpen(false),
							})}
						</NavMobileMenuItem>
					))}
			</NavMobileMenu>
		</>
	);
};

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * @internal Adds margin to the top of the page to account for the fixed navigation bar
	 *
	 * @default false
	 */
	fixedNav?: boolean;
	/**
	 * @internal Logo element to render in the navigation bar
	 */
	logoElement?: React.ReactNode;
	/**
	 * @internal Used by the `Header` component to render the navigation bar
	 */
	blockLinks?: React.ReactNode[];
	/**
	 * @internal Duration of the scroll animation when clicking on the logo
	 *
	 * @default 500
	 */
	duration?: number;
	/**
	 * @internal Snap scroll when clicking on the navigation links
	 *
	 * @default false
	 */
	snapScroll?: boolean;
}

/**
 * @internal Renders the navigation bar
 *
 */
export const PageNavigation = forwardRef<HTMLDivElement, NavigationProps>(
	(
		{
			className,
			fixedNav = false,
			snapScroll = false,
			logoElement,
			duration = 500,
			blockLinks,
			...rest
		},
		ref,
	): JSX.Element => {
		const classes = classNames(className);

		return (
			<Nav
				$fixed={fixedNav}
				id="loom-navigation_nav"
				className={classes}
				ref={ref}
				{...rest}
			>
				<NavLogoContainer
					className="loom-navigation_nav-logo"
					onClick={() => {
						animateScroll.scrollToTop({
							duration,
							...(fixedNav && snapScroll && { containerId: 'loom-wrapper' }),
							...(fixedNav && { to: 'loom-header' }),
						});
					}}
				>
					{logoElement}
				</NavLogoContainer>
				<NavLinksContainer className="loom-navigation_nav-links">
					{blockLinks}
				</NavLinksContainer>
				<PageMobileNav blockLinks={blockLinks} />
			</Nav>
		);
	},
);

PageNavigation.displayName = 'PageNavigation';