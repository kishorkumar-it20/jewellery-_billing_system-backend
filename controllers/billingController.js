const Billing = require('../models/Billing');

exports.createBill = async (req, res) => {
  const bill = new Billing(req.body);
  const saved = await bill.save();
  res.json(saved);
};

exports.getAllBills = async (req, res) => {
  const bills = await Billing.find().sort({ createdAt: -1 });
  res.json(bills);
};

exports.searchBills = async (req, res) => {
  const query = req.query.q || '';
  const regex = new RegExp(query, 'i');
  const bills = await Billing.find({
    $or: [
      { 'items.name': regex },
      { date: { $regex: regex } },
    ],
  });
  res.json(bills);
};
