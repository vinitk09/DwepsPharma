# Admin Panel - DWEP Pharma

This is the admin panel for managing products and blogs for the DWEP Pharma website.

## Features

- ✅ Full CRUD operations for Products
- ✅ Full CRUD operations for Blogs
- ✅ MongoDB database integration
- ✅ Modern, responsive admin interface
- ✅ Clean and intuitive UI

## Setup Instructions

### 1. Install Dependencies

The dependencies should already be installed. If not, run:

```bash
npm install
```

### 2. Configure MongoDB

1. Create a `.env.local` file in the `admin` folder (copy from `.env.example`):

```bash
cp .env.example .env.local
```

2. Update the MongoDB connection string in `.env.local`:

```env
MONGODB_URI=mongodb://localhost:27017/dwepspharma
```

For MongoDB Atlas (cloud), use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dwepspharma?retryWrites=true&w=majority
```

### 3. Run the Development Server

```bash
npm run dev
```

The admin panel will be available at `http://localhost:3000` (or the port shown in your terminal).

## Usage

### Dashboard

The dashboard provides an overview and quick access to manage products and blogs.

### Products Management

- **View Products**: Navigate to `/products` to see all products
- **Add Product**: Click "Add New Product" button or go to `/products/new`
- **Edit Product**: Click "Edit" on any product or go to `/products/[id]/edit`
- **Delete Product**: Click "Delete" on any product (with confirmation)

Product fields:
- Name (required)
- Description (required)
- Image URL (required)
- Package Information (required)

### Blogs Management

- **View Blogs**: Navigate to `/blogs` to see all blogs
- **Add Blog**: Click "Add New Blog" button or go to `/blogs/new`
- **Edit Blog**: Click "Edit" on any blog or go to `/blogs/[id]/edit`
- **Delete Blog**: Click "Delete" on any blog (with confirmation)

Blog fields:
- Title (required)
- Description (required)
- Image URL (required)
- Read More Link (optional, defaults to "#")

## API Routes

### Products API

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/[id]` - Get a single product
- `PUT /api/products/[id]` - Update a product
- `DELETE /api/products/[id]` - Delete a product

### Blogs API

- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create a new blog
- `GET /api/blogs/[id]` - Get a single blog
- `PUT /api/blogs/[id]` - Update a blog
- `DELETE /api/blogs/[id]` - Delete a blog

## Database Models

### Product Model

```javascript
{
  name: String (required),
  description: String (required),
  image: String (required),
  packageInfo: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Blog Model

```javascript
{
  title: String (required),
  description: String (required),
  image: String (required),
  readMore: String (default: "#"),
  createdAt: Date,
  updatedAt: Date
}
```

## Project Structure

```
admin/
├── lib/
│   └── mongodb.js          # MongoDB connection utility
├── models/
│   ├── Product.js          # Product Mongoose model
│   └── Blog.js             # Blog Mongoose model
├── src/
│   └── app/
│       ├── api/
│       │   ├── products/   # Product API routes
│       │   └── blogs/      # Blog API routes
│       ├── components/
│       │   └── Layout.js   # Admin layout component
│       ├── products/       # Product management pages
│       ├── blogs/          # Blog management pages
│       ├── layout.js       # Root layout
│       └── page.js         # Dashboard page
└── .env.local              # Environment variables (create this)
```

## Notes

- Make sure MongoDB is running before starting the development server
- The admin panel is separate from the main frontend and does not affect it
- All data is stored in MongoDB using the models defined in the `models/` folder