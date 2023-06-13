/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Logo } from './Logo.styled';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
	sx?: ThemeUICSSObject;
}

/**
 * TODO: Add description
 *
 * @example
 * <Logo>
 *   <!-- your content here -->
 * </Logo>
 */
export const HeaderLogo = forwardRef<HTMLDivElement, LogoProps>(
	({ className, children, ...rest }, ref): JSX.Element => {
		const classes = classNames('loom-logo_root', className);

		return (
			<Logo className={classes} {...rest} ref={ref}>
				{children}
			</Logo>
		);
	},
);

HeaderLogo.displayName = 'HeaderLogo';
