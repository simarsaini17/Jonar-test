import React from 'react';
import { CategoryContainer, Image, Info, Title, Button } from './style';
const CategoryItem = ({ item }) => {
	return (
		<CategoryContainer>
			<Image src={item.image} />
			<Info>
				<Title>{item.title}</Title>
				<Button>Shop Now</Button>
			</Info>
		</CategoryContainer>
	);
};

export default CategoryItem;
