const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		stockleft: { type: Number, required: true },
		ordered: { type: Number, required: true },
		refunds: { type: Number, required: true },
		sales: { type: Number, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Inventory', InventorySchema);
