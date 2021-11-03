import React, { useEffect, useState } from 'react';
import Product from './Product';
import { ProductsContainer } from './style';
import { getAllProducts } from '../../services/getProducts';

const Products = (props) => {
	const [products, setProducts] = useState([]);
	console.log(props.searchItem);

	useEffect(() => {
		getAllProducts().then((items) => {
			setProducts(items);
		});
	}, []);

	return (
		<ProductsContainer>
			{products.map((prod) => (
				<Product item={prod} key={prod._id} />
			))}
		</ProductsContainer>
	);
};

export default Products;
