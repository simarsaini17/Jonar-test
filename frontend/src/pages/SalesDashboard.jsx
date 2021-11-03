import React, { useState } from 'react';
import {
	DashBoardConatiner,
	DashBoardNavBar,
	DashInfo,
	LeftSide,
	List,
	SideBar,
	SideBarList,
	SideBarTitle,
} from './style/ProductListStyle';
import { SidebarData } from '../data';
import SalesAnalytics from '../component/SalesAnalytics/SalesAnalytics';
import LineChart from '../component/Charts/LineChart';
import InvenInfo from '../component/Inventory/InventoryInformation';

export const SalesDashboard = () => {
	const [showDialog, setDialog] = useState('Dashboard');

	const showPage = (title) => {
		setDialog(title);
	};

	return (
		<DashBoardConatiner>
			<DashBoardNavBar />
			<DashInfo>
				<SideBar>
					<SideBarList>
						{SidebarData.map((item, index) => {
							return (
								<List key={index} onClick={() => showPage(item.title)}>
									<SideBarTitle>{item.title}</SideBarTitle>
								</List>
							);
						})}
					</SideBarList>
				</SideBar>
				<LeftSide>
					{showDialog === 'Dashboard' ? (
						<>
							<SalesAnalytics />
							<LineChart />
							<InvenInfo />
						</>
					) : showDialog === 'Orders' ? (
						<LineChart />
					) : (
						<InvenInfo />
					)}
				</LeftSide>
			</DashInfo>
		</DashBoardConatiner>
	);
};

export default SalesDashboard;
