/// <reference types="react" />
import { ThemeUICSSObject } from 'theme-ui';
export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * `PageFooter` component represents the footer section of your page. Does not take entire viewport height. Not recommended for use with `Container` component.
 *
 * @example
 * <PageFooter>
 *   <!-- Your footer content here -->
 * </PageFooter>
 */
export declare const PageFooter: import("react").ForwardRefExoticComponent<FooterProps & import("react").RefAttributes<HTMLDivElement>>;
