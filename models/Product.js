import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
    trim: true,
  },
  packageInfo: {
    type: String,
    required: [true, 'Package information is required'],
    trim: true,
  },
}, {
  timestamps: true,
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;

