const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productsRoute = require('./routes/products');
const salesRoute = require('./routes/monthlySales');
const inventoryRoute = require('./routes/inventory');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('connected'))
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());

app.use('/api/products', productsRoute);
app.use('/api/sales', salesRoute);
app.use('/api/inventory', inventoryRoute);

app.listen(process.env.PORT || 4000, () => {
	console.log('backend server is running');
});
