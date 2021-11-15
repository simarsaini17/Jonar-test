import React from 'react';
import NavBar from '../component/NavBar/Navbar';
import Announcement from '../component/Announcement/Announcement';
import Categories from '../component/Categories/Categories';
import Products from '../component/Products/Products';

const HomePage = () => {
	return (
		<>
			<Announcement />
			<NavBar />
			<Categories />
			<Products />
		</>
	);
};

export default HomePage;
