import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import {
	Conatiner,
	Logo,
	DashBoard,
	Orders,
	LogoContainer,
	Wrapper,
} from './style';

const NavBar = ({ cart }) => {
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		if (cart.length > 0) {
			cart?.forEach((item) => {
				count += item.qty;
			});
		}

		setCartCount(count);
	}, [cart, cartCount]);

	return (
		<Conatiner>
			<Wrapper>
				<LogoContainer>
					<Logo>Jonar Shop</Logo>
				</LogoContainer>
				<DashBoard>
					<Badge badgeContent={cartCount} color='primary'>
						<ShoppingCartOutlined />
					</Badge>
					<Orders>
						<Link to='/dashboard'>Sales Dashboard</Link>
					</Orders>
				</DashBoard>
			</Wrapper>
		</Conatiner>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(NavBar);
