const router = require('express').Router();
const MonthlySales = require('../models/MonthlySales');

//Create
router.post('/', async (req, res) => {
	const newSale = new MonthlySales(req.body);
	try {
		const savedSales = await newSale.save();
		res.status(200).json(savedSales);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Update
router.put('/:id', async (req, res) => {
	try {
		const updateMonthlySale = MonthlySales.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updateMonthlySale);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Delete
router.delete('/:id', async (req, res) => {
	try {
		await MonthlySale.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
});

//Get product

router.get('/:id', async (req, res) => {
	try {
		const monthlySales = await MonthlySales.findById(req.params.id);
		res.status(200).json(monthlySales);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Get all products

router.get('/', async (req, res) => {
	try {
		let monthlySales;
		monthlySales = await MonthlySales.find();
		res.status(200).json(monthlySales);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
