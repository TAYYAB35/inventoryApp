import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    brand: {
        type: String
    },
    sku: {
        type: String,
        unique: true,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    minStock: {
        type: Number,
        default: 10,
    },
    status: {
        type: String,
        default: "active",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})

const Product = mongoose.model("Product", productSchema)

export default Product