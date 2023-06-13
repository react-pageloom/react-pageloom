/** @jsxImportSource theme-ui */
import { Children, forwardRef, isValidElement } from 'react';
import { animateScroll } from 'react-scroll';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
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
					</Nav>
				)}
				{childrenElements}
			</Header>
		);
	},
);

PageHeader.displayName = 'PageHeader';
