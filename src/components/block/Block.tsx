/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Block } from './Block.styled';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Id of the block to be used for anchor links
	 *
	 */
	id: string;
	/**
	 * Label of the block to be used for anchor links
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
 * <Block id="about" label="About">
 *   <!-- your content here -->
 * </Block>
 */
export const PageBlock = forwardRef<HTMLDivElement, BlockProps>(
	({ className, children, id, label = '', ...rest }, ref): JSX.Element => {
		const classes = classNames('loom-block_root', className);

		return (
			<Block
				className={classes}
				{...rest}
				ref={ref}
				id={id}
				aria-label={label}
				aria-labelledby={label}
			>
				{children}
			</Block>
		);
	},
);

PageBlock.displayName = 'PageBlock';
