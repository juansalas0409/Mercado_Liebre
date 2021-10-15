const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = products.filter(function(product){
    return product.category == 'visited'
});
const inSale = products.filter(function(product){
    return product.category =='in-sale'
});

const controller = {
    // home
    index: (req, res) => {
        res.render('./users/home', {visited, inSale, toThousand});
    },

    // search
    search: (req, res) => {
        let search = req.query.keywords;
        let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
        res.render('./users/results', {products: productsToSearch, search, toThousand})
    },

    // register user
    register: (req, res) => {
        res.render('./users/user-register')
    },

    // login user
    login: (req, res) => {
        res.render('./users/user-register')
    }
};

module.exports = controller