export const getAllSales = () => {
	return fetch('http://localhost:4000/api/sales/')
		.then((results) => results.json())
		.catch((error) => console.log(error));
};
