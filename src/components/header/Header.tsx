/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Header, Nav } from './Header.styled';

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
	({ className, children, blockLinks, ...rest }, ref): JSX.Element => {
		const classes = classNames('loom-header_root', className);

		return (
			<Header className={classes} {...rest} ref={ref}>
				<Nav>{blockLinks}</Nav>
				{children}
			</Header>
		);
	},
);

PageHeader.displayName = 'PageHeader';
