import styled from '@emotion/styled';

export const Header = styled.header`
	width: 100%;
	min-height: 100dvh;
	margin-left: auto;
	margin-right: auto;
	overflow: auto;
	position: relative;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 20px;
	position: sticky;
	top: 0;
	background-color: white;
	border-bottom: 1px solid #e1e1e1;
	z-index: 1000;
	color: #000;
`;
