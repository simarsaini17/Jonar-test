const router = require('express').Router();
const Inventory = require('../models/Inventory');

//Create
router.post('/', async (req, res) => {
	const newItem = new Inventory(req.body);
	try {
		const savedItem = await newItem.save();
		res.status(200).json(savedItem);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Update
router.put('/:id', async (req, res) => {
	try {
		const updateInventoryItem = Inventory.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updateInventoryItem);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Delete
router.delete('/:id', async (req, res) => {
	try {
		await Inventory.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
});

//Get all

router.get('/', async (req, res) => {
	try {
		let inventoryItems;
		inventoryItems = await Inventory.find();
		res.status(200).json(inventoryItems);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
