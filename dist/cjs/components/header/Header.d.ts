/// <reference types="react" />
import { ThemeUICSSObject } from 'theme-ui';
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Show the navigation bar
     *
     * @default false
     */
    showNav?: boolean;
    /**
     * @internal Used by the `Header` component to render the navigation bar
     *
     */
    blockLinks?: React.ReactNode[];
    /**
     * @internal If true, the scroll will snap to the block
     *
     * @default false
     */
    snap?: boolean;
    /**
     * @internal Adds margin to the top of the page to account for the fixed navigation bar
     *
     * @default false
     */
    fixedNav?: boolean;
    sx?: ThemeUICSSObject;
}
/**
 * `PageHeader` component is a section at the top of the page. It can hold your site's logo and navigation links. The component supports block snapping and has an `sx` prop for custom styles. It can account for a fixed navigation bar if `fixedNav` prop is set to `true` in the `PageWrapper` component.
 *
 * @example
 * <PageHeader fixedNav={true}>
 *   <HeaderLogo>MySite</HeaderLogo>
 *   <!-- your content here -->
 * </PageHeader>
 */
export declare const PageHeader: import("react").ForwardRefExoticComponent<HeaderProps & import("react").RefAttributes<HTMLDivElement>>;
