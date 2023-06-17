/** @jsxImportSource theme-ui */
import { Children, forwardRef, isValidElement, useRef, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Box, Button, ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { PageDrawer } from '../drawer';
import { HeaderLogo } from '../logo';
import {
	Header,
	Nav,
	NavLinksContainer,
	NavLogoContainer,
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
		const [drawerOpen, setDrawerOpen] = useState(false);
		const buttonRef = useRef<HTMLButtonElement>(null);

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
					<Nav $fixed={fixedNav} className="loom-header_nav">
						<PageDrawer
							drawerOpen={drawerOpen}
							setDrawerOpen={setDrawerOpen}
							buttonRef={buttonRef}
						>
							<NavLinksContainer
								key={`loom-link-drawer`}
								className="loom-header_nav-links"
								sx={{
									flexDirection: 'column',
									paddingTop: '2rem',
								}}
							>
								{blockLinks}
							</NavLinksContainer>
						</PageDrawer>
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
							<Box
								sx={{
									display: ['none', 'none', 'none', 'block'],
								}}
							>
								{blockLinks}
							</Box>
							<Button
								variant="black"
								sx={{
									display: ['block', 'block', 'block', 'none'],
								}}
								onClick={() => {
									setDrawerOpen(true);
								}}
								ref={buttonRef}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-menu fea icon-md"
								>
									<line x1="3" y1="12" x2="21" y2="12" children="" />
									<line x1={3} y1={6} x2={21} y2={6} children="" />
									<line x1="3" y1="18" x2="21" y2="18" children="" />
								</svg>
							</Button>
						</NavLinksContainer>
					</Nav>
				)}
				{childrenElements}
			</Header>
		);
	},
);

PageHeader.displayName = 'PageHeader';
