const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
	month: { type: String, required: true },
	sales: { type: Number, required: true },
	orders: { type: Number, required: true },
	grossprofit: { type: Number, required: true },
	netprofit: { type: Number, required: true },
});

module.exports = mongoose.model('Sales', SalesSchema);
