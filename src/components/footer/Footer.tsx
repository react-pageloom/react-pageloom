/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Footer } from './Footer.styled';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * @internal If true, the scroll will snap to the block
	 *
	 * @default false
	 */
	snap?: boolean;
	/**
	 * @internal If true, the navigation bar will be fixed to the top of the page
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
 * <Footer>
 *   <!-- your content here -->
 * </Footer>
 */
export const PageFooter = forwardRef<HTMLDivElement, FooterProps>(
	(
		{ className, children, fixedNav = false, snap = false, ...rest },
		ref,
	): JSX.Element => {
		const classes = classNames('loom-footer_root', className);

		return (
			// @ts-ignore
			<Footer
				className={classes}
				$fixedNav={fixedNav}
				$snap={snap}
				{...rest}
				ref={ref}
			>
				{children}
			</Footer>
		);
	},
);

PageFooter.displayName = 'PageFooter';
