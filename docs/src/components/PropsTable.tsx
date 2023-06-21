import {
	useTable,
	Column,
	Cell,
	HeaderGroup,
	Row,
	TableInstance,
} from 'react-table';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Container } from 'react-pageloom';
import { Strong, StrongBlack } from './HowToUseBlock';
import { WHITE } from '../constants';
import { LightFont } from './HeroContent';

const StyledTable = styled.table`
	border-spacing: 0;
	width: 80%;
	margin: 0 auto;
	border-radius: 4px;
	overflow: hidden;
	background-color: #1d267d;

	tr {
		:last-child {
			td {
				border-bottom: 0;
			}
		}
	}

	th,
	td {
		margin: 0;
		padding: 1rem;
		border-bottom: 1px solid ${WHITE};
		color: ${WHITE};

		:last-child {
			border-right: 0;
		}
	}

	th {
		background: ${WHITE};
		border-bottom: 2px solid #dcdcdc;
		color: rgb(17, 27, 39);
		font-weight: 700;
	}
`;

const StyledContainer = styled(Container)`
	padding: 2rem;
`;

const Title = styled.h1`
	margin-bottom: 1rem;
	text-align: center;
	color: ${WHITE};
	font-size: 2.5rem;
`;

const Description = styled.p`
	margin-bottom: 2rem;
	text-align: center;
	color: ${WHITE};
	font-size: 1.2rem;
`;

const ExamplesBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #1d267d;
	width: fit-content;
	justify-content: center;
	margin: 2rem auto;
	padding: 1rem;
	text-align: center;
	overflow: hidden;
	width: 75%;
`;

const Examples = styled.h2`
	color: ${WHITE};
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const ExampleText = styled.p`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
	color: ${WHITE};
`;

export const Anchor = styled.a`
	color: ${WHITE};
	text-decoration: none;
	font-weight: 700;
`;

interface IData {
	prop: React.ReactElement;
	description: string | React.ReactElement;
	component: React.ReactElement;
}

function PropsTable() {
	const data = useMemo<IData[]>(
		() => [
			{
				prop: <Strong>sx</Strong>,
				description: (
					<span>
						custom styles for the components. See the{' '}
						<Anchor href="https://theme-ui.com/sx-prop" target="_blank">
							Theme UI sx prop
						</Anchor>{' '}
						for more information.
					</span>
				),
				component: <StrongBlack>All</StrongBlack>,
			},
			{
				prop: <Strong>fixedNav</Strong>,
				description: 'fixes the nav to the top of the page on scroll',
				component: <StrongBlack>PageWrapper</StrongBlack>,
			},
			{
				prop: <Strong>snapScroll</Strong>,
				description: (
					<span>
						snaps the page to the top of the screen on scroll <br /> (does not
						work with block height larger than viewport)
					</span>
				),
				component: <StrongBlack>PageWrapper</StrongBlack>,
			},
			{
				prop: <Strong>centered</Strong>,
				description: 'center the content',
				component: <StrongBlack>Container</StrongBlack>,
			},
		],
		[]
	);

	const columns = useMemo<Column<IData>[]>(
		() => [
			{
				Header: 'Prop',
				accessor: 'prop',
			},
			{
				Header: 'Description',
				accessor: 'description',
			},
			{
				Header: 'Component',
				accessor: 'component',
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable<IData>({ columns, data }) as TableInstance<IData>;

	return (
		<StyledContainer
			centered
			sx={{
				justifyContent: 'space-around',
			}}
		>
			<div>
				<Title>Props</Title>
				<Description>
					This table showcases the optional props that you can pass to the React
					Pageloom components. Each prop is listed with a description, the
					component(s) it can be used with, and an example usage.
				</Description>

				<StyledTable {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup: HeaderGroup<IData>) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row: Row<IData>) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell: Cell<IData>) => (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</StyledTable>
				<ExamplesBlock>
					<Examples>Examples:</Examples>
					<ExampleText>
						<Strong>sx:</Strong>
						<SyntaxHighlighter language="tsx" style={coldarkDark}>
							{`<PageWrapper sx={{ color: 'red' }}>`}
						</SyntaxHighlighter>
					</ExampleText>
					<ExampleText>
						<Strong>fixedNav:</Strong>
						<SyntaxHighlighter language="tsx" style={coldarkDark}>
							{`<PageWrapper fixedNav>`}
						</SyntaxHighlighter>
					</ExampleText>
					<ExampleText>
						<Strong>snapScroll:</Strong>
						<SyntaxHighlighter language="tsx" style={coldarkDark}>
							{`<PageWrapper snapScroll>`}
						</SyntaxHighlighter>
					</ExampleText>
					<ExampleText>
						<Strong>centered:</Strong>
						<SyntaxHighlighter language="tsx" style={coldarkDark}>
							{`<Container centered>`}
						</SyntaxHighlighter>
					</ExampleText>
				</ExamplesBlock>
			</div>
			<LightFont>
				Another <code>PageBlock</code> component
			</LightFont>
		</StyledContainer>
	);
}

export default PropsTable;
