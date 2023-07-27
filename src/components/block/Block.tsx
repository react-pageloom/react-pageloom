/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { Element } from 'react-scroll';
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
 * `PageBlock` component represents a section of your page. Each block should have a unique `id`, which can be used for navigation. You can optionally provide a `label` for the block. The `snap` prop enables snapping when scrolling, and `fixedNav` adjusts the block to account for a fixed navigation bar.
 *
 * @example
 * <PageBlock id="about" label="About Us">
 *   <!-- Your content here -->
 * </PageBlock>
 */

export const PageBlock = forwardRef<HTMLDivElement, BlockProps>(
	(
		{
			className,
			children,
			id,
			label = '',
			snap = false,
			fixedNav = false,
			...rest
		},
		ref,
	): JSX.Element => {
		const classes = classNames('loom-block_root', className);
		// add name prop for react-scroll to Block

		return (
			<Block
				className={classes}
				$fixedNav={fixedNav}
				$snap={snap}
				ref={ref}
				id={id}
				aria-label={label}
				{...rest}
			>
				<Element name={id} className="loom-block_element">
					{children}
				</Element>
			</Block>
		);
	},
);

PageBlock.displayName = 'PageBlock';
