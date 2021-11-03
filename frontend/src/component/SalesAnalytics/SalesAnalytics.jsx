import React, { useEffect, useState } from 'react';
import { getAllSales } from '../../services/getSales';
import Card from '../Card/Card';
import { Wrapper } from './style';

const SalesAnalytics = () => {
	const [analytics, setAnalytics] = useState([]);

	useEffect(() => {
		getAllSales().then((items) => {
			setAnalytics(items);
		});
	}, []);

	return (
		<Wrapper>
			{analytics.map((i, index) => (
				<Card
					month={i.month}
					sales={i.sales}
					netprofit={i.netprofit}
					key={index}
				/>
			))}
		</Wrapper>
	);
};

export default SalesAnalytics;
