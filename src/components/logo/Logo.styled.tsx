import styled from '@emotion/styled';
import { BLACK } from '@src/constants/colors';
import { NAVBAR_HEIGHT } from '@src/constants/sizes';

export const Logo = styled.div`
	display: flex;
	align-items: center;
	height: calc(${NAVBAR_HEIGHT}px - 0.5rem);
	padding: 0 1rem;
	font-size: 1.5rem;
	font-weight: 700;
	color: ${BLACK};
`;
