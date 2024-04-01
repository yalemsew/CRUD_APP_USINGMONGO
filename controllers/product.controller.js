const Product = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
        setTimeout(async () => {
            const products = await Product.find();
            res.status(200).json(products);
        }, 1000);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};

const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).send("Product not found");
        }
        const updated = await Product.findById(id);

        res.status(200).json(updated);

    } catch (error) {
        res.status(500).send(error.message);

    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).send(error.message);
    }
}
const findProductByName = async (req, res) => {
    try {
        const { name } = req.params;
        const targetProducts = await Product.find({ name: { '$regex': ".*" + name + ".*" } });
        console.log(JSON.stringify(targetProducts))
        res.status(200).json(targetProducts);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts, createProduct, getProduct, updateProduct, deleteProduct, findProductByName
};