import {
	useTable,
	Column,
	Cell,
	HeaderGroup,
	Row,
	TableInstance,
} from 'react-table';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Container } from 'react-pageloom';
import { Strong } from './HowToUseBlock';

const StyledTable = styled.table`
	border-spacing: 0;
	width: 80%;
	margin: 0 auto;
	border-radius: 4px;
	overflow: hidden;

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
		border-bottom: 1px solid #fff;
		color: #fff;

		:last-child {
			border-right: 0;
		}
	}

	th {
		background: #efefef;
		border-bottom: 2px solid #dcdcdc;
		color: #555;
		font-weight: 700;
	}
`;

const StyledContainer = styled(Container)`
	padding: 2rem;
`;

const Title = styled.h1`
	margin-bottom: 1rem;
	text-align: center;
	color: #fff;
	font-size: 2.5rem;
`;

const Description = styled.p`
	margin-bottom: 2rem;
	text-align: center;
	color: #fff;
	font-size: 1.2rem;
`;

const ExamplesBlock = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #1d267d;
	padding: 1rem;
`;

const Examples = styled.h2`
	color: #fff;
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const ExampleText = styled.p`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
	color: #fff;
	border-bottom: 1px solid #000;
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
						<a href="https://theme-ui.com/sx-prop" target="_blank">
							Theme UI sx prop
						</a>{' '}
						for more information.
					</span>
				),
				component: <Strong>All</Strong>,
			},
			{
				prop: <Strong>fixedNav</Strong>,
				description: 'fixes the nav to the top of the page on scroll',
				component: <Strong>PageWrapper</Strong>,
			},
			{
				prop: <Strong>snapScroll</Strong>,
				description: 'snaps the page to the top of the screen on scroll',
				component: <Strong>PageWrapper</Strong>,
			},
			{
				prop: <Strong>centered</Strong>,
				description: 'center the content',
				component: <Strong>Container</Strong>,
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
				<Title>React Pageloom Props</Title>
				<Description>
					This table showcases the optional props that you can pass to the React
					Pageloom components. Each prop is listed with a description, the
					component(s) it can be used with, and an example usage.
				</Description>

				<StyledTable {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup: HeaderGroup<IData>) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column: Column<IData>) => (
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
						{'<PageWrapper sx={{ fontFamily: "sans-serif" }} />'}
					</ExampleText>
					<ExampleText>
						<Strong>fixedNav:</Strong> {'<PageWrapper fixedNav />'}
					</ExampleText>
					<ExampleText>
						<Strong>snapScroll:</Strong> {'<PageWrapper snapScroll />'}
					</ExampleText>
					<ExampleText>
						<Strong>centered:</Strong> {'<Container centered />'}
					</ExampleText>
				</ExamplesBlock>
			</div>
			<h2>
				Another <code>PageBlock</code> component
			</h2>
		</StyledContainer>
	);
}

export default PropsTable;
