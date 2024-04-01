const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    name: { type: String, required: [true, "Product name is required"] },
    price: { type: Number, required: [true, "Product price is required"] },
    quantity: {
        type: Number,
        required: [true, "Product quentity is required"],
        default: 0,
    },
    image: { type: String, required: false },
},
    {
        timestamps: true,
    }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
