/** @jsxImportSource theme-ui */
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Container.styled';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * If `true`, apply `width: 100%`.
	 *
	 * @default false
	 */
	fluid?: boolean;
	/**
	 * @internal Fixed navbar enabled
	 *
	 * @default false
	 */
	fixedNav?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * The fundamental building block that centers your content horizontally.
 * It creates a simple `div` to wrap your content and align within a given viewport.
 *
 * @example
 * <Container>
 *   <!-- your content here -->
 * </Container>
 */
export const Container = ({
	fluid = false,
	className,
	children,
	fixedNav = false,
	sx,
	...rest
}: ContainerProps) => {
	const classes = classNames(
		'loom-container_root',
		fluid ? 'loom-container_fluid' : '',
		className,
	);

	if (fluid) {
		return (
			<Sc.FluidContainer
				sx={sx}
				$fixedNav={fixedNav}
				className={classes}
				{...rest}
			>
				{children}
			</Sc.FluidContainer>
		);
	}

	return (
		<Sc.Container sx={sx} $fixedNav={fixedNav} className={classes} {...rest}>
			{children}
		</Sc.Container>
	);
};
