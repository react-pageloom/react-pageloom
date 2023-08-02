/** @jsxImportSource theme-ui */
import { Children, forwardRef, isValidElement } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { HeaderLogo } from '../logo';
import { PageNavigation } from '../navigation/Navigation';
import { Header } from './Header.styled';

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
	/**
	 * @internal If true, the navigation bar will be rendered in the drawer
	 * @default false
	 * */
	drawerNav?: boolean;
	/**
	 * @internal Extra components to render in the navigation bar
	 */
	extraNavComponent?: React.ReactNode;
	sx?: ThemeUICSSObject;
}

/**
 * `PageHeader` component is a section at the top of the page. It can hold your site's logo and navigation links. The component supports block snapping and has an `sx` prop for custom styles. It can account for a fixed navigation bar if `fixedNav` prop is set to `true` in the `PageWrapper` component.
 *
 * @example
 * <PageHeader fixedNav={true}>
 *   <HeaderLogo>MySite</HeaderLogo>
 *   <!-- your content here -->
 * </PageHeader>
 */

export const PageHeader = forwardRef<HTMLDivElement, HeaderProps>(
	(
		{
			className,
			children,
			blockLinks,
			snap = false,
			fixedNav = false,
			drawerNav = false,
			extraNavComponent,
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
				ref={ref}
				{...rest}
			>
				{!fixedNav && (
					<PageNavigation
						blockLinks={blockLinks}
						fixedNav={fixedNav}
						logoElement={logoElement}
						drawerNav={drawerNav}
						extraComponents={extraNavComponent}
					/>
				)}
				{childrenElements}
			</Header>
		);
	},
);

PageHeader.displayName = 'PageHeader';
