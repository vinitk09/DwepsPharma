import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Blog description is required'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'Blog image is required'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Blog content is required'],
    trim: true,
  },
}, {
  timestamps: true,
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
