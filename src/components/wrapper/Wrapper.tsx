/** @jsxImportSource theme-ui */
import { Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
} from 'react';
import { Link } from 'react-scroll';
import { ThemeUICSSObject } from 'theme-ui';
import { JSX } from 'theme-ui/jsx-runtime';
import { classNames } from '@src/utils/classNames';
import { PageBlock } from '../block';
import { PageHeader } from '../header';
import { Wrapper } from './Wrapper.styled';

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Scroll duration in milliseconds
	 *
	 * @default 500
	 */
	duration?: number;
	sx?: ThemeUICSSObject;
}

/**
 * TODO: Add description
 *
 * @example
 * <Wrapper>
 *   <!-- your content here -->
 * </Wrapper>
 */
export const PageWrapper = forwardRef<HTMLDivElement, WrapperProps>(
	({ className, children, duration = 500, ...rest }, ref): JSX.Element => {
		let header: React.ReactElement | null = null;
		const blocks: React.ReactElement[] = [];

		const classes = classNames('loom-wrapper_root', className);

		Children.forEach(children, (child) => {
			if (!isValidElement(child)) return;

			const componentType = child.type as React.ComponentType;

			if (componentType.displayName === PageHeader.displayName) {
				header = child;
			} else if (componentType.displayName === PageBlock.displayName) {
				blocks.push(child);
			} else {
				console.warn(
					`Invalid child component ${componentType.displayName} found in the Wrapper`,
				);
			}
		});

		const blockLinks = blocks.map((block: ReactElement) => {
			const { id, label } = block.props;
			return (
				<Link
					key={`loom-link-${id}`}
					activeClass="loom-active"
					to={id}
					spy={true}
					smooth={true}
					duration={duration}
				>
					{label || id}
				</Link>
			);
		});

		const enhancedHeader = header ? cloneElement(header, { blockLinks }) : null;

		return (
			<>
				<Global styles={emotionReset} />
				<Wrapper className={classes} {...rest} ref={ref}>
					{enhancedHeader}
					{blocks}
				</Wrapper>
			</>
		);
	},
);

PageWrapper.displayName = 'PageWrapper';
