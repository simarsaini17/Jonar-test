import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/actions';
import NavBar from '../component/NavBar/Navbar';
import Announcement from '../component/Announcement/Announcement';
import { getProduct } from '../services/getProducts';

import {
	Conatiner,
	ContinueShopping,
	ImageContainer,
	Wrapper,
	Image,
	InfoConatiner,
	Title,
	Description,
	Price,
	Size,
	Filter,
	FilterConatiner,
	FilterTitle,
	FilterColor,
	FilterSize,
	FilterSizeOption,
	AddToCart,
} from './style/ProductListStyle';

const SingleProductPage = (props) => {
	const [product, setProduct] = useState({});
	const productId = props.match.params.productId;
	const { addToCart } = props;

	useEffect(() => {
		getProduct(productId).then((item) => {
			setProduct({ ...item });
		});
	}, [productId]);

	return (
		<Conatiner>
			<Announcement />
			<NavBar />
			<Wrapper>
				<ImageContainer>
					<Image src={product.img} />
				</ImageContainer>
				<InfoConatiner>
					<Title>{product.title}</Title>
					<Description>{product.desc}</Description>
					<Size>Size available: {product.size}</Size>
					<Price>$ {product.price}</Price>
					<FilterConatiner>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color='blue' />
							<FilterColor color='red' />
							<FilterColor color='green' />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterConatiner>
					<AddToCart onClick={() => addToCart(product._id)}>
						ADD TO CART
					</AddToCart>
					<ContinueShopping>
						<Link to='/'>Continue Shopping</Link>
					</ContinueShopping>
				</InfoConatiner>
			</Wrapper>
		</Conatiner>
	);
};

const mapStateToProps = (state) => {
	return {
		current: state.shop.currentItem,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
