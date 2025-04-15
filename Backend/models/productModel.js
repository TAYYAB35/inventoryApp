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
        required: true,
    },
    brand: {
        type: String
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    reorderLevel: {
        type: Number,
        default: 0,
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