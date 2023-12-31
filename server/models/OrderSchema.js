const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: 'Product'
            },
            count: Number,
            color: String,
        }
    ],
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: "Not Processed Yet",
        enum: [
            "Not Processed Yet",
            "Processing",
            "cash on delivery",
            "Dispatched",
            "Cancelled",
            "Complete"
        ]
    },
    orderBy: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: true })



module.exports = mongoose.model("Order", orderSchema)