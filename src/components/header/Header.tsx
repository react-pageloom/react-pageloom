/** @jsxImportSource theme-ui */
import {
	Children,
	createElement,
	forwardRef,
	isValidElement,
	useEffect,
	useState,
} from 'react';
import { animateScroll } from 'react-scroll';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { SCREEN_MD } from '@src/constants/breakpoints';
import { HeaderLogo } from '../logo';
import {
	Header,
	Nav,
	NavLinksContainer,
	NavLogoContainer,
	NavMobileButton,
	NavMobileMenu,
	NavMobileMenuItem,
} from './Header.styled';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Show the navigation bar
	 *
	 * @default false
	 */
	showNav?: boolean;
	/**
	 * @internal Used by the `Header` component to render the navigation bar
	 *
	 */
	blockLinks?: React.ReactNode[];
	/**
	 * @internal If true, the scroll will snap to the block
	 *
	 * @default false
	 */
	snap?: boolean;
	/**
	 * @internal Adds margin to the top of the page to account for the fixed navigation bar
	 *
	 * @default false
	 */
	fixedNav?: boolean;
	sx?: ThemeUICSSObject;
}

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

/**
 * TODO: Add description
 *
 * @example
 * <Header>
 *   <!-- your content here -->
 * </Header>
 */
export const PageHeader = forwardRef<HTMLDivElement, HeaderProps>(
	(
		{
			className,
			children,
			blockLinks,
			snap = false,
			fixedNav = false,
			...rest
		},
		ref,
	): JSX.Element => {
		const classes = classNames('loom-header_root', className);

		let logoElement: React.ReactElement | null = null;
		const childrenElements: React.ReactElement[] = [];

		Children.forEach(children, (child) => {
			if (!isValidElement(child)) return;

			const componentType = child.type as React.ComponentType;

			if (componentType.displayName === HeaderLogo.displayName)
				logoElement = child;
			else childrenElements.push(child);
		});

		return (
			<Header
				id="loom-header"
				className={classes}
				$snap={snap}
				$fixedNav={fixedNav}
				{...rest}
				ref={ref}
			>
				{!fixedNav && (
					<Nav $fixed={fixedNav} id="loom-header_nav">
						<NavLogoContainer
							className="loom-header_nav-logo"
							onClick={() => {
								animateScroll.scrollToTop({
									duration: 500,
									containerId: 'loom-wrapper',
								});
							}} // TODO: Add duration prop
						>
							{logoElement}
						</NavLogoContainer>
						<NavLinksContainer className="loom-header_nav-links">
							{blockLinks}
						</NavLinksContainer>
						<PageMobileNav blockLinks={blockLinks} />
					</Nav>
				)}
				{childrenElements}
			</Header>
		);
	},
);

PageHeader.displayName = 'PageHeader';
