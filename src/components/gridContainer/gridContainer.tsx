/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { GridWrapper } from './gridContainer.styled';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	sx?: ThemeUICSSObject;
}

/**
 * `GridContainer` component is used to render a grid container
 *
 * *
 * @example
 * <GridContainer>
 *   <!-- Your content here -->
 * </GridContainer>
 */

export const GridContainer = forwardRef<HTMLDivElement, GridProps>(
	({ children, ...rest }, ref): JSX.Element => {
		return <GridWrapper>{children}</GridWrapper>;
	},
);

GridContainer.displayName = 'GridContainer';
