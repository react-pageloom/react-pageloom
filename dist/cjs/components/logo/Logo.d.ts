/// <reference types="react" />
import { ThemeUICSSObject } from 'theme-ui';
export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: ThemeUICSSObject;
}
/**
 * TODO: Add description
 *
 * @example
 * <Logo>
 *   <!-- your content here -->
 * </Logo>
 */
export declare const HeaderLogo: import("react").ForwardRefExoticComponent<LogoProps & import("react").RefAttributes<HTMLDivElement>>;
