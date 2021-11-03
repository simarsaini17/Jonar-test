import React from 'react';
import {
	CardContainer,
	ItemCard,
	SubTitle,
	Value,
	Title,
	Profit,
	Sales,
} from './styles';

const Card = (props) => {
	return (
		<CardContainer>
			<Title>Sales in {props.month}</Title>
			<ItemCard>
				<Sales>
					<SubTitle>Sales</SubTitle>
					<Value>{props.sales}</Value>
				</Sales>
				<Profit>
					<SubTitle>Net profit</SubTitle>
					<Value>{props.netprofit}</Value>
				</Profit>
			</ItemCard>
		</CardContainer>
	);
};

export default Card;
