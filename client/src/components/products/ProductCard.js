import React, { useState } from 'react'
import { Card, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
// import { Skeleton } from 'antd';
import { showAverage } from '../../functions/AverageRatings';

const { Meta } = Card;

const ProductCard = ({ product }) => {

    const [toolTip, setToolTip] = useState("Add To Cart")

    const { user, cart } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch()


    //hanlde Product Card
    const handleCart = () => {
        let cart = []
        if (typeof window !== "undefined") { //if we have window

            if (localStorage.getItem("cart")) {   //if we have already a product in cart
                cart = JSON.parse(localStorage.getItem("cart")) //parse into json object
            }
            cart.push({
                ...product,   // we spreate each product to ad a more property of count 
                count: 1
            })
            let unique = _.uniqWith(cart, _.isEqual) // will remove the dublicates from the arry

            localStorage.setItem("cart", JSON.stringify(unique))
            // console.log(cart);

            setToolTip("Added")

            //dispatch to redux store
            dispatch({
                type: "ADD_TO_CART",
                payload: unique
            })



            // show item in side drawer
            dispatch({
                type: "SET_DRAWER",
                payload: true
            })
        }

    }




    const { images, title, description, slug, price } = product
    return (
        <>

            {/* Loading skelton*/}
            {/* <Skeleton active></Skeleton> */}
            {/*Average Star Rating of a product */}
            {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : (
                <div className='text-center text-info pt-3 pb-3 '>No Ratings Yet</div>

            )}
            <Card
                hoverable
                cover={<img alt='product' src={images && images.length ? images[0].url : ""}
                    style={{ height: "150px", objectFit: "cover", with: "100%" }}
                    className="p-1" />}
                actions={[

                    <Link to={`/product/${slug}`}>
                        <EyeOutlined className='text-info' /><br /> <p className='text-info'>View Product</p>
                    </Link>,
                    <Tooltip title={product.quantity < 1 ? "Out Of Stock" : toolTip}>
                        <button className='cardBtn' onClick={handleCart} disabled={product.quantity < 1}>
                            <ShoppingCartOutlined className='text-danger' />
                            <br />
                            <p className='text-danger'>{product.quantity < 1 ? "Out Of Stock" : " Add To Cart"}</p>
                        </button>
                    </Tooltip>
                ]}
            >
                <Meta title={`${title} -  $${price}`} description={`${description && description.substring(0, 50)}...`} />

            </Card>
        </>
    )

}

export default ProductCard