import styled from '@emotion/styled';
import { SCREEN_LG, SCREEN_SM, SCREEN_XM } from '@src/constants/breakpoints';
import { SCREEN_HEIGHT } from '@src/constants/sizes';
import { COLUMN_WIDTH, GUTTER } from '@src/constants/spacing';

export const FluidContainer = styled.div<{
	$fixedNav: boolean;
	$centered: boolean;
}>`
	margin-left: auto;
	margin-right: auto;
	width: 100%;

	box-sizing: border-box;
	min-height: ${SCREEN_HEIGHT};

	${({ $centered }) =>
		$centered &&
		`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;

export const Container = styled.div<{
	$fixedNav: boolean;
	$centered: boolean;
}>`
	width: 100%;
	max-width: ${COLUMN_WIDTH * 4 + GUTTER * 2 * 3}px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: ${SCREEN_XM}px) {
		max-width: ${COLUMN_WIDTH * 8 + GUTTER * 2 * 7}px;
	}

	@media (min-width: ${SCREEN_LG}px) {
		max-width: ${COLUMN_WIDTH * 12 + GUTTER * 2 * 11}px;
	}

	@media (max-width: ${SCREEN_SM}px) {
		width: 100%;
		max-width: 100%;
	}

	box-sizing: border-box;
	min-height: ${SCREEN_HEIGHT};

	${({ $centered }) =>
		$centered &&
		`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;
