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
import { WHITE } from '../constants';

const StyledTable = styled.table`
	border-spacing: 0;
	width: 80%;
	margin: 0 auto;
	border-radius: 4px;
	overflow: hidden;
	background-color: ${WHITE};
	max-height: 500px;
	overflow-y: auto;

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
		border-bottom: 1px solid #1d267d;
		color: #000;

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
	color: ${WHITE};
	font-size: 2.5rem;
`;

const Description = styled.p`
	margin-bottom: 2rem;
	text-align: center;
	color: ${WHITE};
	font-size: 1.2rem;
`;

export const Anchor = styled.a`
	color: ${WHITE};
	text-decoration: none;
	font-weight: 700;
`;

const Strong = styled.span`
	box-sizing: border-box;
	font-weight: 600;
	background-color: #000;
	color: ${WHITE};
	border-radius: 0.2rem;
	text-align: center;
`;

const Paragraph = styled.p`
	line-height: 1.5;
`;

interface IData {
	globalClass: string;
	description: string | React.ReactElement;
}

function ClassListTable() {
	const data = useMemo<IData[]>(
		() => [
			{
				globalClass: '#loom-wrapper',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Wrapper</Strong>{' '}
						component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-block_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Block</Strong>{' '}
						component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-container_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Container</Strong>{' '}
						component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-container_fluid',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Container</Strong>{' '}
						component when the <Strong>fluid</Strong> prop is set to{' '}
						<Strong>true</Strong>.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-container_centered',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Container</Strong>{' '}
						component when the <Strong>centered</Strong> prop is set to{' '}
						<Strong>true</Strong>.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-footer_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Footer</Strong>{' '}
						component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-header_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the <Strong>Header</Strong>{' '}
						component.
					</Paragraph>
				),
			},
			{
				globalClass: '#loom-navigation_nav',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<Strong>Navigation</Strong> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-navigation_nav-links',
				description: (
					<Paragraph>
						Styles applied to the navigation links of the{' '}
						<Strong>Navigation</Strong> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-navigation_nav-logo',
				description: (
					<Paragraph>
						Styles applied to the navigation logo of the{' '}
						<Strong>Navigation</Strong> component.
					</Paragraph>
				),
			},
		],
		[]
	);

	const columns = useMemo<Column<IData>[]>(
		() => [
			{
				Header: 'Global class',
				accessor: 'globalClass',
			},
			{
				Header: 'Description',
				accessor: 'description',
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
			<Title>CSS</Title>
			<Description>
				Using the <Strong>sx</Strong> prop or css file, you can style the
				components however you want.
			</Description>

			<StyledTable {...getTableProps()}>
				<thead
					style={{
						textAlign: 'left',
					}}
				>
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
			<h2>
				Another <code>PageBlock</code> component
			</h2>
		</StyledContainer>
	);
}

export default ClassListTable;
