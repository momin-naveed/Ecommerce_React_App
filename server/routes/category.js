const express = require('express')
const router = express.Router();

//@midlewares
const { checkAuth, checkAdmin } = require("../midlewares/auth")

const { create, read, update, remove, list, getSub } = require('../controllers/category')

router.post('/category', checkAuth, checkAdmin, create)
router.get('/categories', list)
router.get('/category/:slug', read)
router.put('/category/:slug', checkAuth, checkAdmin, update)
router.delete('/category/:slug', checkAuth, checkAdmin, remove)
router.get('/category/subs/:_id', getSub);



module.exports = router