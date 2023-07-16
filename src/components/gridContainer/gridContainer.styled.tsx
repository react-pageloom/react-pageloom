import styled from '@emotion/styled';

export const GridWrapper = styled.div({
	display: 'grid',
	gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
	gap: '10px',
	justifyContent: 'center',
	alignItems: 'center',
	justifyItems: 'center',
});
