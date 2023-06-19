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
import { animateScroll, Link } from 'react-scroll';
import { ThemeUICSSObject } from 'theme-ui';
import { JSX } from 'theme-ui/jsx-runtime';
import { classNames } from '@src/utils/classNames';
import { PageBlock } from '../block';
import { PageHeader, PageMobileNav } from '../header';
import {
	Nav,
	NavLinksContainer,
	NavLogoContainer,
} from '../header/Header.styled';
import { HeaderLogo } from '../logo';
import { BlockContainer, Wrapper } from './Wrapper.styled';

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Scroll duration in milliseconds
	 *
	 * @default 500
	 */
	duration?: number;
	/**
	 * If true, the scroll will snap to the block
	 *
	 * @default false
	 */
	snapScroll?: boolean;
	/**
	 * If true, the navigation bar will be fixed to the top of the page
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
 * <Wrapper>
 *   <!-- your content here -->
 * </Wrapper>
 */
export const PageWrapper = forwardRef<HTMLDivElement, WrapperProps>(
	(
		{
			className,
			children,
			duration = 500,
			snapScroll = false,
			fixedNav = false,
			...rest
		},
		ref,
	): JSX.Element => {
		let header: React.ReactElement | null = null;
		let footer: React.ReactElement | null = null;
		let logoElement: React.ReactElement | null = null;
		const blocks: React.ReactElement[] = [];

		const classes = classNames('loom-wrapper_root', className);

		Children.forEach(children, (child, index) => {
			if (!isValidElement(child)) return;

			const componentType = child.type as React.ComponentType;

			if (componentType.displayName === PageHeader.displayName) {
				const headerProps = {
					...child.props,
					snap: snapScroll,
					fixedNav,
				};
				header = cloneElement(child as ReactElement, headerProps);
				logoElement = (child as ReactElement).props.children.find(
					(child) => child.type === HeaderLogo,
				);
			} else if (componentType.displayName === PageBlock.displayName) {
				const block = cloneElement(child as ReactElement, {
					snap: snapScroll,
					fixedNav,
					key: `loom-block-${index}`,
				});

				blocks.push(block);
			} else if (componentType.displayName === 'PageFooter') {
				footer = cloneElement(child as ReactElement, {
					...child.props,
					snap: snapScroll,
					fixedNav,
					key: `loom-footer-${index}`,
				});
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
					className="loom-nav_link"
					activeClass="loom-nav_active"
					to={id}
					spy={true}
					smooth={true}
					duration={duration}
					offset={fixedNav ? -55 : 0}
					{...(snapScroll && { containerId: 'loom-wrapper' })}
				>
					{label || id}
				</Link>
			);
		});

		const enhancedHeader = header ? cloneElement(header, { blockLinks }) : null;

		return (
			<>
				<Global styles={{ ...emotionReset, boxSizing: 'border-box' }} />
				<Wrapper
					id="loom-wrapper"
					className={classes}
					$snapScroll={snapScroll}
					ref={ref}
					{...rest}
				>
					{fixedNav && (
						<Nav $fixed={fixedNav} id="loom-header_nav">
							<NavLogoContainer
								className="loom-header_nav-logo"
								onClick={() => {
									animateScroll.scrollToTop({
										duration,
										...(snapScroll && { containerId: 'loom-wrapper' }),
										to: 'loom-header',
									});
								}}
							>
								{logoElement}
							</NavLogoContainer>
							<NavLinksContainer className="loom-header_nav-links">
								{blockLinks}
							</NavLinksContainer>
							<PageMobileNav blockLinks={blockLinks} />
						</Nav>
					)}
					{enhancedHeader}
					<BlockContainer>{blocks}</BlockContainer>
					{footer}
				</Wrapper>
			</>
		);
	},
);

PageWrapper.displayName = 'PageWrapper';
