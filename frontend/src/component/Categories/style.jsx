import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex: 1 0 21%;
	position: relative;
	width: 600px;
	margin: 5px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Info = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0px;
	left: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Title = styled.div`
	color: white;
	font-weight: bold;
	margin: 20px;
`;
export const Button = styled.button`
	border: none;
	padding: 5px;
	color: black;
	background-color: white;
	cursor: pointer;
`;
