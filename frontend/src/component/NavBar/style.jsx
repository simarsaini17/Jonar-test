import styled from 'styled-components';

export const Conatiner = styled.div`
	height: auto;
	background-image: linear-gradient(315deg, #d5adc8 0%, #ff8489 84%);
`;

export const Wrapper = styled.div`
	padding: 20px 10px;
	display: flex;
	justify-content: space-between;
`;
export const LogoContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;
export const Logo = styled.h3`
	font-family: Snell Roundhand;
	font-weight: bold;
	font-size: 28px;
	margin: 0px;
`;
export const SearchContainer = styled.div`
	display: flex;
	flex: 1;

	align-items: center;
	justify-content: flex-start;
	border: 0.5px solid lightgray;
	border-radius: 5px;
	padding: 5px;
`;

export const Input = styled.input`
	align-items: center;
	border: none;
	width: 100%;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 16px;
	background-color: #85c1e9;
	:focus {
		outline: none;
	}
`;

export const DashBoard = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Orders = styled.h3`
	font-family: Snell Roundhand;
	font-size: 28px;
	margin: 0px 20px;
	a {
		color: black;
		text-decoration: none !important;
	}
`;
