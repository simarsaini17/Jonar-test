import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getAllSales } from '../../services/getSales';
import { ChartContainer } from './style';

const LineChart = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getAllSales().then((data) => {
			setData(data);
		});
	}, []);

	const getLabel = data.map((data) => {
		return data.month;
	});

	const getDisplayData = data.map((data) => {
		return data.orders;
	});

	const dataSet = {
		labels: getLabel,
		datasets: [
			{
				label: 'Number of Orders',
				data: getDisplayData,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<ChartContainer>
			<Line data={dataSet} options={options}></Line>
		</ChartContainer>
	);
};

export default LineChart;
