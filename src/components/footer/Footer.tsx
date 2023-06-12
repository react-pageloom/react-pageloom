/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Footer } from './Footer.styled';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Id of the Footer to be used for anchor links
	 *
	 */
	id: string;
	/**
	 * Label of the Footer to be used for anchor links
	 *
	 * @default ''
	 */
	label?: string;
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
	({ className, children, ...rest }, ref): JSX.Element => {
		const classes = classNames('loom-footer_root', className);

		return (
			// @ts-ignore
			<Footer className={classes} {...rest} ref={ref}>
				{children}
			</Footer>
		);
	},
);

PageFooter.displayName = 'PageFooter';
