import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContainer, Image, Button } from './style';

const Product = ({ item }) => {
	return (
		<ProductContainer>
			<Image src={item.img} />
			<Button>
				<Link to={`/product/${item._id}`}>Buy Now</Link>
			</Button>
		</ProductContainer>
	);
};

export default Product;
