import React, { useState, useEffect } from 'react';
import { getInventory } from '../../services/getInventory';
import {
	Row,
	Column,
	TabelContainer,
	TableTitle,
	ColumnTitle,
	Table,
} from './style';

const InvenInfo = () => {
	const [inventoryItems, setInventoryItems] = useState([]);

	useEffect(() => {
		getInventory().then((items) => {
			setInventoryItems(items);
		});
	}, []);

	const RenderTableData = () => {
		return inventoryItems.map((ele, index) => {
			return (
				<Row key={index}>
					<Column>{ele.title} </Column>
					<Column>{ele.desc} </Column>
					<Column>{ele.stockleft} </Column>
					<Column>{ele.ordered} </Column>
					<Column>{ele.refunds} </Column>
					<Column>{ele.sales} </Column>
				</Row>
			);
		});
	};

	return (
		<TabelContainer>
			<TableTitle>Inventory Table</TableTitle>
			<Table>
				<thead>
					<Row>
						<ColumnTitle>Product</ColumnTitle>
						<ColumnTitle>Product Desc</ColumnTitle>
						<ColumnTitle>Stock Left</ColumnTitle>
						<ColumnTitle>Ordered</ColumnTitle>
						<ColumnTitle>Refund</ColumnTitle>
						<ColumnTitle>Sales</ColumnTitle>
					</Row>
				</thead>
				<tbody>
					<RenderTableData />
				</tbody>
			</Table>
		</TabelContainer>
	);
};
export default InvenInfo;
