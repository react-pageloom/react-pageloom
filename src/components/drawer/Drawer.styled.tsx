import styled from '@emotion/styled';

export const Drawer = styled.div<{ open: boolean }>`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	width: 40%;
	background-color: white;
	box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	z-index: 1001;
`;
