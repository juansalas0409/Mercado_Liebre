const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage: storage});

const productsController = require('../controllers/productsController');

// all the products
router.get('/', productsController.index);

// create products
router.get('/create', productsController.create);
router.post('/', upload.single('imagen'), productsController.store);

// details
router.get('/detail/:id', productsController.detail);

// edit
router.get('/edit/:id', productsController.edit);
router.patch('/edit/:id', productsController.update);

//delete
router.delete('/destroy/:id', productsController.destroy);

module.exports = router;