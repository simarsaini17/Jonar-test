import styled from 'styled-components';

export const ProductsContainer = styled.div`
	display: flex;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const ProductContainer = styled.div`
	display: flex;
	flex: 1 0 20vw;
	flex-direction: column;
	position: relative;
	width: 280px;
	height: 350px;
	margin: 20px 5px;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Button = styled.button`
	bottom: 0px;
	border: none;
	width: 100%;
	height: 60px;
	font-size: 20px;
	padding: 5px;
	color: white;
	background-image: linear-gradient(315deg, #d5adc8 0%, #ff8489 84%);
	cursor: pointer;

	a {
		color: black;
		text-decoration: none !important;
	}
`;
