/** @jsxImportSource theme-ui */
import { forwardRef, memo, useEffect } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { JSX } from 'theme-ui/jsx-runtime';
import { Drawer } from './Drawer.styled';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Set the drawer open or closed
	 *
	 * @default false
	 */
	setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
	/**
	 * If true, the drawer will be open
	 * @default RIGHT_SIDE
	 * */
	drawerOpen: boolean;
	/**
	 * The ref of the button that opens the drawer
	 * */
	buttonRef: React.RefObject<HTMLButtonElement>;
	/**
	 * TODO: SX from Theme UI
	 * */
	sx?: ThemeUICSSObject;
}

/**
 * Drawer component
 *
 * @example
 * <Drawer>
 *   <!-- your content here -->
 * </Drawer>
 */
export const PageDrawer = memo(
	forwardRef<HTMLDivElement, DrawerProps>(
		(
			{ className, children, setDrawerOpen, drawerOpen, buttonRef, ...rest },
			ref,
		): JSX.Element => {
			useEffect(() => {
				const handleClickOutside = (event: MouseEvent) => {
					if (
						drawerOpen &&
						buttonRef?.current &&
						buttonRef.current.contains(event.target as Node)
					) {
						return; // Ignore clicks on the button
					}

					const drawerElement = document.getElementById('drawer');
					if (drawerElement && !drawerElement.contains(event.target as Node)) {
						setDrawerOpen(false);
					}
				};

				document.addEventListener('click', handleClickOutside);

				return () => {
					document.removeEventListener('click', handleClickOutside);
				};
			}, [setDrawerOpen, drawerOpen]);

			return (
				<>
					<Drawer
						className={className}
						open={drawerOpen}
						id="drawer"
						ref={ref}
						{...rest}
					>
						{children}
					</Drawer>
				</>
			);
		},
	),
	(prevProps, nextProps) => {
		return prevProps.drawerOpen === nextProps.drawerOpen;
	},
);

PageDrawer.displayName = 'Drawer';
