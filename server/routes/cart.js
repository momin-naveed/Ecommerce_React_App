const express = require('express')
const router = express.Router();

//middleware
const { checkAuth } = require('../midlewares/auth')
//controller

const { userCart, getCart, removeCart, sendAddress, applyCoupon } = require('../controllers/cart')

router.post('/user/cart', checkAuth, userCart)
router.get('/user/cart', checkAuth, getCart)
router.delete('/user/cart', checkAuth, removeCart)

router.patch('/user/cart', checkAuth, sendAddress)

//coupon 
router.post('/user/cart/coupon', checkAuth, applyCoupon)

module.exports = router