const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { name, category, price, discount, tax } = req.body;
        const imagePath = req.file ? req.file.path : null;
    
        const product = new Product({
          name,
          category,
          price,
          discount,
          tax,
          image: imagePath
        });
    
        await product.save();
        res.status(201).json({ message: 'Product created', product });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
