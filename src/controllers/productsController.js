const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    // all the products
    index: (req, res) => {
        res.render('./products/products', {products, toThousand})
    },

    // details
    detail: (req, res) => {
        let id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render('./products/product-detail', {product, toThousand});
    },

    // create
    create: (req,res) => {
        res.render('./products/product-create')
    },

    // store product created
    store: (req, res) => {
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image: req.file.filename,
        };
        products.push(newProduct);
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },

    // edit product
    edit: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id ==id);
        res.render('./products/product-edit', {productToEdit})
    },

    // update product edited
    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        
        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image: productToEdit.image,
        };

        let newProducts = product.map(product => {
            if(product.id == productToEdit.id) {
                return product = {...productToEdit};
            }
            return product
        });

        fs.writeFileSync(productsPath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/');
    },

    // delete
    destroy: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsPath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/');
    }

};

module.exports = controller