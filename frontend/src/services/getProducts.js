export const getAllProducts = () => {
	return fetch('http://localhost:4000/api/products/')
		.then((results) => results.json())
		.catch((error) => console.log(error));
};

export const getProduct = (id) => {
	return fetch(`http://localhost:4000/api/products/${id}`)
		.then((results) => results.json())
		.catch((error) => console.log(error));
};
