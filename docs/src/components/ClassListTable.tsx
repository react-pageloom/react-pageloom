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
import { StrongBlack } from './HowToUseBlock';

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
		color: rgb(17, 27, 39);

		:last-child {
			border-right: 0;
		}
	}

	th {
		background: ${WHITE};
		border-bottom: 2px solid rgb(17, 27, 39);
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
	line-height: 1.5;
`;

export const Anchor = styled.a`
	color: ${WHITE};
	text-decoration: none;
	font-weight: 700;
`;

const Paragraph = styled.p`
	line-height: 1.5;
`;

interface IData {
	globalClass: string | React.ReactElement;
	description: string | React.ReactElement;
}

function ClassListTable() {
	const data = useMemo<IData[]>(
		() => [
			{
				globalClass: '#loom-wrapper',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Wrapper</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-block_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Block</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-container_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Container</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-container_fluid',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Container</StrongBlack> component when the{' '}
						<StrongBlack>fluid</StrongBlack> prop is set to{' '}
						<StrongBlack>true</StrongBlack>.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-container_centered',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Container</StrongBlack> component when the{' '}
						<StrongBlack>centered</StrongBlack> prop is set to{' '}
						<StrongBlack>true</StrongBlack>.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-footer_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Footer</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-header_root',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Header</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '#loom-navigation_nav',
				description: (
					<Paragraph>
						Styles applied to the root element of the{' '}
						<StrongBlack>Navigation</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-navigation_nav-links',
				description: (
					<Paragraph>
						Styles applied to the navigation links of the{' '}
						<StrongBlack>Navigation</StrongBlack> component.
					</Paragraph>
				),
			},
			{
				globalClass: '.loom-navigation_nav-logo',
				description: (
					<Paragraph>
						Styles applied to the navigation logo of the{' '}
						<StrongBlack>Navigation</StrongBlack> component.
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
				Using the <StrongBlack>sx</StrongBlack> prop or css file, you can style
				the components however you want.
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
			<h2
				style={{
					marginTop: '2rem',
				}}
			>
				And another <code>PageBlock</code> component
			</h2>
		</StyledContainer>
	);
}

export default ClassListTable;
