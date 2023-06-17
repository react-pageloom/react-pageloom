/** @jsxImportSource theme-ui */
import { Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
	useRef,
	useState,
} from 'react';
import { animateScroll, Link } from 'react-scroll';
import { Box, Button, ThemeUICSSObject } from 'theme-ui';
import { JSX } from 'theme-ui/jsx-runtime';
import { classNames } from '@src/utils/classNames';
import { PageBlock } from '../block';
import { PageDrawer } from '../drawer';
import { PageHeader } from '../header';
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
		const [drawerOpen, setDrawerOpen] = useState(false);
		const buttonRef = useRef<HTMLButtonElement>(null);

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
				<Global styles={emotionReset} />
				<Wrapper
					id="loom-wrapper"
					className={classes}
					$snapScroll={snapScroll}
					ref={ref}
					{...rest}
				>
					{fixedNav && (
						<Nav $fixed={fixedNav} className="loom-header_nav">
							<PageDrawer
								drawerOpen={drawerOpen}
								setDrawerOpen={setDrawerOpen}
								buttonRef={buttonRef}
							>
								<NavLinksContainer
									key={`loom-link-drawer`}
									className="loom-header_nav-links"
									sx={{
										flexDirection: 'column',
										paddingTop: '2rem',
									}}
								>
									{blockLinks}
								</NavLinksContainer>
							</PageDrawer>
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
								<Box
									sx={{
										display: ['none', 'none', 'none', 'block'],
									}}
								>
									{blockLinks}
								</Box>
								<Button
									variant="black"
									sx={{
										display: ['block', 'block', 'block', 'none'],
									}}
									onClick={() => {
										setDrawerOpen(true);
									}}
									ref={buttonRef}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="feather feather-menu fea icon-md"
									>
										<line x1="3" y1="12" x2="21" y2="12" children="" />
										<line x1={3} y1={6} x2={21} y2={6} children="" />
										<line x1="3" y1="18" x2="21" y2="18" children="" />
									</svg>
								</Button>
							</NavLinksContainer>
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
