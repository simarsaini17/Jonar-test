import styled from 'styled-components';

export const Conatiner = styled.div``;
export const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	justify-content: space-between;
`;
export const ImageContainer = styled.div`
	flex: 1;
`;

export const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: auto;
	object-fit: cover;
`;
export const InfoConatiner = styled.div`
	flex: 1;
	padding: 10px 60px;
`;
export const Title = styled.h1`
	font-weight: 400;
`;
export const Size = styled.h4``;
export const Description = styled.div`
	margin: 20px 0px;
`;
export const Price = styled.span`
	font-weight: 400;
	font-size: 20px;
`;

export const AddToCart = styled.button`
	padding: 5px;
	border: 1px solid teal;
	margin-top: 10px;
	border-radius: 7px;
	background-color: white;
	color: black;
	cursor: pointer;
	&:hover {
		background-color: #f8f4f4;
	}
`;
export const FilterConatiner = styled.div`
	width: 50%;
	display: flex;
	margin-top: 20px;
	justify-content: space-between;
`;
export const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
export const Filter = styled.div`
	display: flex;
	align-items: center;
`;
export const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;
export const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
export const FilterSizeOption = styled.option``;

export const ContinueShopping = styled.h4`
	a {
		text-decoration: none !important;
		color: #b096ed;
	}
`;

export const DashBoardConatiner = styled.div``;

export const DashBoardNavBar = styled.div`
	padding: 30px;
	height: auto;
	background-image: linear-gradient(315deg, #d5adc8 0%, #ff8489 84%);
	width: 100%;
`;

export const DashInfo = styled.div`
	display: flex;
	flex-direction: row;
`;
export const SideBar = styled.div`
	width: 250px;
	height: 100vh;
	color: white;
	background-color: #f8ceec;
	background-image: linear-gradient(315deg, #f8ceec 10%, #a88beb 74%);
`;
export const LeftSide = styled.div`
	height: 100%;
	width: auto;
`;

export const SideBarList = styled.ul`
	height: 100%;
	width: 100%;
	margin: 0px;
	padding: 0px;
	text-align: center;
`;

export const SideBarTitle = styled.h1`
	margin: 0px;
`;
export const List = styled.li`
	list-style-type: none;
	height: 80px;
	vertical-align: middle;
	cursor: pointer;
	margin: 0px;
	padding: 0px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;

	&: hover {
		background-color: #d3c5f5;
	}
`;
