/// <reference types="react" />
import { ThemeUICSSObject } from 'theme-ui';
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
export declare const PageWrapper: import("react").ForwardRefExoticComponent<WrapperProps & import("react").RefAttributes<HTMLDivElement>>;
