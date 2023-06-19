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
 * `PageFooter` component represents the footer section of your page. Does not take entire viewport height. Not recommended for use with `Container` component.
 *
 * @example
 * <PageFooter>
 *   <!-- Your footer content here -->
 * </PageFooter>
 */

export const PageFooter = forwardRef<HTMLDivElement, FooterProps>(
	(
		{ className, children, fixedNav = false, snap = false, ...rest },
		ref,
	): JSX.Element => {
		const classes = classNames('loom-footer_root', className);

		return (
			<Footer
				className={classes}
				$fixedNav={fixedNav}
				$snap={snap}
				ref={ref}
				{...rest}
			>
				{children}
			</Footer>
		);
	},
);

PageFooter.displayName = 'PageFooter';
