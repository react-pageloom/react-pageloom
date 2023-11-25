/** @jsxImportSource theme-ui */
import { Global } from '@emotion/react';
import { Theme } from '@src/theme';
import emotionReset from 'emotion-reset';
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
	useEffect,
} from 'react';
import { Link, scroller } from 'react-scroll';
import { ThemeUICSSObject } from 'theme-ui';
import { JSX } from 'theme-ui/jsx-runtime';
import { classNames } from '@src/utils/classNames';
import { BlockProps, PageBlock } from '../block';
import { FooterProps, PageFooter } from '../footer';
import { HeaderProps, PageHeader } from '../header';
import { HeaderLogo } from '../logo';
import { PageNavigation } from '../navigation/Navigation';
import { ThemeWrapper } from '../themeprovider/ThemeProvider';
import { BlockContainer, Wrapper } from './Wrapper.styled';

type PageChild =
	| React.ReactElement<HeaderProps, typeof PageHeader>
	| React.ReactElement<BlockProps, typeof PageBlock>
	| React.ReactElement<FooterProps, typeof PageFooter>;

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
	/**
	 * If true, the navigation bar will be rendered in the drawer
	 * @default true
	 * */
	drawerNav?: boolean;
	/**
	 * Custom theme object. It will be merged with the default theme.
	 */
	theme?: Partial<Theme>;
	/**
	 * Children of the `PageWrapper` component. Can be `PageHeader`, `PageBlock`, and `PageFooter` components.
	 */
	children?: React.ReactNode | PageChild[];
	/**
	 *  Extra components to render in the navigation bar. Useful for rendering a search bar or a shopping cart icon.
	 */
	extraNavComponent?: React.ReactNode;
	sx?: ThemeUICSSObject;
}

/**
 * `PageWrapper` is a core container component used to wrap all other components in the library. It hosts `PageHeader`, `PageBlock`, and optionally `PageFooter` components. Supports snap scrolling, fixed navigation bar, and custom styles via `sx` prop.
 *
 * @example
 *
 * <PageWrapper snapScroll fixedNav>
 *  <PageHeader>
 *    <HeaderLogo>Logo</HeaderLogo>
 *  </PageHeader>
 *  <PageBlock id="block-1" label="Block 1">
 *    <!-- your content here -->
 *  </PageBlock>
 *  <PageFooter>
 *    <!-- your content here -->
 *  </PageFooter>
 * </PageWrapper>
 */

export const PageWrapper = forwardRef<HTMLDivElement, WrapperProps>(
	(
		{
			className,
			children,
			duration = 500,
			snapScroll = false,
			fixedNav = false,
			drawerNav = false,
			theme,
			extraNavComponent,
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
				if (!fixedNav) headerProps.extraNavComponent = extraNavComponent;

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

		const handleSetActive = (to: string) => {
			window.history.replaceState({}, '', `#${to}`);
		};

		useEffect(() => {
			const hash = window.location.hash.substring(1);
			const removeHashOnTop = () => {
				if (window.scrollY === 0) {
					window.history.replaceState({}, '', window.location.pathname);
				}
			};

			if (hash) {
				scroller.scrollTo(hash, {
					duration,
					delay: 0,
					smooth: true,
					offset: fixedNav ? -55 : 0,
					...(snapScroll && { containerId: 'loom-wrapper' }),
				});
			}

			window.addEventListener('scroll', removeHashOnTop);

			return () => {
				window.removeEventListener('scroll', removeHashOnTop);
			};
		}, []);

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
					onSetActive={handleSetActive}
					offset={fixedNav ? -55 : 0}
					{...(snapScroll && { containerId: 'loom-wrapper' })}
				>
					{label || id}
				</Link>
			);
		});

		const enhancedHeader = header ? cloneElement(header, { blockLinks }) : null;

		return (
			<ThemeWrapper theme={theme}>
				<Global styles={{ ...emotionReset, boxSizing: 'border-box' }} />
				<Wrapper
					id="loom-wrapper"
					className={classes}
					$snapScroll={snapScroll}
					ref={ref}
					{...rest}
				>
					{fixedNav && (
						<PageNavigation
							blockLinks={blockLinks}
							logoElement={logoElement}
							snapScroll={snapScroll}
							fixedNav={fixedNav}
							drawerNav={drawerNav}
							extraComponents={extraNavComponent}
						/>
					)}
					{enhancedHeader}
					<BlockContainer>{blocks}</BlockContainer>
					{footer}
				</Wrapper>
			</ThemeWrapper>
		);
	},
);

PageWrapper.displayName = 'PageWrapper';
