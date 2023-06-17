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

const StyledTable = styled.table`
	border-spacing: 0;
	width: 80%;
	margin: 0 auto;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);

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
		border-bottom: 1px solid #dcdcdc;
		border-right: 1px solid #dcdcdc;
		background: #606c5d;

		:last-child {
			border-right: 0;
		}
	}

	th {
		background: #efefef;
		border-bottom: 2px solid #dcdcdc;
		color: #555;
	}
`;

interface IData {
	prop: string;
	description: string;
	component: string;
}

function PropsTable() {
	const data = useMemo<IData[]>(
		() => [
			{
				prop: 'sx',
				description: 'custom styles for the block',
				component: 'All',
			},
			{
				prop: 'fixedNav',
				description: 'use fixed navigation',
				component: 'PageWrapper',
			},
			{
				prop: 'snapScroll',
				description: 'use snap scrolling',
				component: 'PageWrapper',
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
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-around',
			}}
		>
			<StyledTable {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup: HeaderGroup<IData>) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column: Column<IData>) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
		</Container>
	);
}

export default PropsTable;
