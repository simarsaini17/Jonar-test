import React from 'react';
import NavBar from '../component/NavBar/Navbar';
import Announcement from '../component/Announcement/Announcement';
import Categories from '../component/Categories/Categories';
import ProductsContainer from '../component/Products/Products';

const HomePage = () => {
	return (
		<>
			<Announcement />
			<NavBar />
			<Categories />
			<ProductsContainer />
		</>
	);
};

export default HomePage;
