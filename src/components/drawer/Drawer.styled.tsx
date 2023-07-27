import styled from '@emotion/styled';
import { Theme } from '@src/theme';
import { rgba } from '@src/utils/rgba';

export const Drawer = styled.div<{ open: boolean; theme: Theme }>`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	width: 40%;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.text};
	box-shadow: -2px 0px 4px ${({ theme }) => rgba(theme.colors.text, 0.1)};
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	z-index: 1001;
`;
