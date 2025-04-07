const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const multer = require('multer');

// Configure multer to store files in 'uploads/' with original filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), createProduct);  // 🧠 Keep only this POST route
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
