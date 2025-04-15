import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantityInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    reorderLevel: {
        type: Number,
        default: 0,
    },
    status: { type: String, enum: ['active', 'discontinued', 'on hold', 'out of stock'], default: 'active' },
    variant: {
        type: String,
    },
    stockIn: {
        type: Number,
        default: 0,
    },
    stockOut: {
        type: Number,
        default: 0,
    },
    stockInDate: {
        type: Date,
        default: Date.now,
    },
    stockOutDate: {
        type: Date,
        default: Date.now,
    },
    lowStockAlert: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
})

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;