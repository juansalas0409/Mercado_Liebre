// const products = require('../database/maindataBase')

const productsList = [
    {
        id: 1,
        name: 'Cafetera Moulinex',
        price: '$6.770',
        discount: '40% OFF',
        image: './images/img-cafetera-moulinex.jpg'
    },
    {
        id: 2,
        name: 'MackBook Pro 2019',
        price: '$230.000',
        discount: '20% OFF',
        image: './images/img-macbook-pro-2019.jpg'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S10',
        price: '$70.500',
        discount: '10% OFF',
        image: './image/img-samsung-galaxy-s10.jpg'
    },
    {
        id: 4,
        name: 'Smart TV Samsung 43"',
        price: '$23.200',
        discount: '5% OFF',
        image: './image/img-tv-samsung-smart.jpg'
    }
]


const mainController= {
    home: (req, res) => {
    return res.render('home');
    },
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    producDetail: (req, res) => {
        let product = productsList.find(product => product.id == req.params.productId);
        res.render('producDetail', {product: product});
        console.log(product);
    } 
}

module.exports = mainController 