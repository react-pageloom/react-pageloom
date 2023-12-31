import { styled } from 'styled-components';
import { Anchor } from './PropsTable';
import { WHITE } from '../constants';

const FooterWrapper = styled.div`
	width: 100%;
	min-height: 100px;
	background: linear-gradient(0, #000000aa 0%, #000000bb 100%),
		url(https://grainy-gradients.vercel.app/noise.svg);
	color: ${WHITE};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1em;
`;

function Footer() {
	return (
		<FooterWrapper>
			<h2>
				For more information, visit the{' '}
				<Anchor
					href="https://github.com/react-pageloom/react-pageloom/"
					target="_blank"
				>
					GitHub repo
				</Anchor>
			</h2>
			<h2>
				This is a <code>PageFooter</code> component
			</h2>
		</FooterWrapper>
	);
}

export default Footer;
