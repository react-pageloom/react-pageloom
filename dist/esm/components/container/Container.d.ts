/// <reference types="react" />
/** @jsxImportSource theme-ui */
import { ThemeUICSSObject } from 'theme-ui';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * If `true`, apply `width: 100%`.
     *
     * @default false
     */
    fluid?: boolean;
    /**
     * @internal Fixed navbar enabled
     *
     * @default false
     */
    fixedNav?: boolean;
    /**
     * If true, the content will be centered on the page.
     *
     * @default true
     */
    centered?: boolean;
    sx?: ThemeUICSSObject;
}
/**
 * The fundamental building block that centers your content horizontally inside the blocks. It is used to provide a consistent look and feel across the page.
 * It creates a simple `div` to wrap your content and align within a given viewport.
 *
 * @example
 * <Container>
 *   <!-- your content here -->
 * </Container>
 */
export declare const Container: ({ fluid, className, children, fixedNav, centered, sx, ...rest }: ContainerProps) => import("theme-ui/jsx-runtime").JSX.Element;
