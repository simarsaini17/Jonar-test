export const getInventory = () => {
	return fetch('http://localhost:4000/api/inventory/')
		.then((results) => results.json())
		.catch((error) => console.log(error));
};
