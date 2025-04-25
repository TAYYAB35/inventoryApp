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
    SKU: {
        type: String,
        required: true,
        unique: true,
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
    Stock: {
        type: Number,
        required: true,
        default: 0,
        validate: {
            validator: function (value) {
                // `this` refers to the current document
                return value >= this.minStock;
            },
            message: props => `Stock (${props.value}) should not be less than minStock.`,
        },
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