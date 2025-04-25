import asyncHandler from './../middlewear/asyncHandler.js';
import Product from '../models/productModel.js'

const getAllProducts = asyncHandler(async (req, res) => {
    const pageSize = 8;
    // const page = Number(req.query.pageNumber || 1);


    // const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {};

    // const count = await Product.countDocuments({ ...keyword }); //get all products
    // const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1));

    const products = await Product.find({})

    res.json({ products })
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Resource not found')
    }
    res.status(200).json(product)
})

// @desc    Get top rated products
// @route   POST /api/products/top
// @access  private 
const getTopProduct = asyncHandler(async (req, res) => {
    const products = await Product.find({ rating: { $gte: 4.5 } }).sort({ rating: -1 }).limit(3);
    if (!products) {
        res.status(404);
        throw new Error('Resource not found')
    }
    res.status(200).json(products)
})

// @desc    Create a new product
// @route   POST /api/products
// @access  private / admin
const creatProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        description,
        image,
        brand,
        category,
        stock,
        link,
        status,
        createdAt,
        minStock,
        updatedAt
    } = req.body;

    const sku = generateSKU();

    // Check if SKU is valid
    if (!sku || sku === null || sku === '') {
        return res.status(400).json({ message: 'SKU generation failed or invalid SKU.' });
    }


    // Check if a product with the same SKU already exists
    const existingProduct = await Product.findOne({ sku });
    if (existingProduct) {
        return res.status(400).json({ message: 'Product with this SKU already exists.' });
    }

    const product = new Product({
        name,
        price,
        description,
        image,
        brand,
        category,
        stock,
        sku,
        link,
        status: status || 'active',
        createdAt: createdAt || Date.now(),
        updatedAt: updatedAt || Date.now(),
        minStock: minStock || 10,
        user: req.user._id,
    });

    const createdProducts = await product.save();
    res.status(201).json(createdProducts);
});


// @desc    update a product
// @route   PUT /api/products/:id
// @access  private / admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Resource not found')
    } else {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.image = image || product.image;
        product.brand = brand || product.brand;
        product.category = category || product.category;
        product.countInStock = countInStock || product.countInStock;
        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    }
})

// @desc    delete a product
// @route   delete /api/products/:id
// @access  private / admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Resource not found')
    } else {
        await product.deleteOne({ _id: product._id });
        res.status(200).json({ message: 'Product deleted successfully' });
    }
})

// @desc    review a product / crate a review
// @route   post /api/products/:id/reviews
// @access  private 
const creatProductReview = asyncHandler(async (req, res) => {

    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Resource not found')
    } else {
        // review tb he add hona ha jb product k andar review ki array me user ka id nahi hoga

        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());
        // alreadyreview k matlab ha ka product ki reviews ki array ma user ki id pass ho gyi ha 
        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
        await product.save();
        res.status(201).json({ message: 'Review added successfully' });


    }
})

const generateSKU = () => {
    // Ensure this function generates a unique SKU
    return 'sku' + Math.floor(Math.random() * 10000000); // Example SKU generation
};




export { getAllProducts, getProductById, creatProduct, updateProduct, deleteProduct, creatProductReview, getTopProduct }