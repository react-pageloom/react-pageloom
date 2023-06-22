/// <reference types="react" />
export declare const PageMobileNav: ({ blockLinks, }: {
    blockLinks?: import("react").ReactNode[] | undefined;
}) => import("theme-ui/jsx-runtime").JSX.Element;
interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @internal Adds margin to the top of the page to account for the fixed navigation bar
     *
     * @default false
     */
    fixedNav?: boolean;
    /**
     * @internal Logo element to render in the navigation bar
     */
    logoElement?: React.ReactNode;
    /**
     * @internal Used by the `Header` component to render the navigation bar
     */
    blockLinks?: React.ReactNode[];
    /**
     * @internal Duration of the scroll animation when clicking on the logo
     *
     * @default 500
     */
    duration?: number;
    /**
     * @internal Snap scroll when clicking on the navigation links
     *
     * @default false
     */
    snapScroll?: boolean;
}
/**
 * @internal Renders the navigation bar
 *
 */
export declare const PageNavigation: import("react").ForwardRefExoticComponent<NavigationProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
