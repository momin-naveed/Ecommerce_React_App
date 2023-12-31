import axios from "axios"


export const userCart = async (cart, authToken) => {
    return await axios.post(`${process.env.REACT_APP_API_REQUEST}/user/cart`
        , { cart },
        {
            headers: {
                authToken
            }
        }
    )
}

export const getCart = async (authToken) => {
    return await axios.get(`${process.env.REACT_APP_API_REQUEST}/user/cart`,
        {
            headers: {
                authToken
            }
        }

    )
}

export const removeCart = async (authToken) => {
    return await axios.delete(`${process.env.REACT_APP_API_REQUEST}/user/cart`,
        {
            headers: {
                authToken
            }
        }
    )
}


//post the user Address in cart page
export const userAddress = async (authToken, address) => {
    return await axios.patch(`${process.env.REACT_APP_API_REQUEST}/user/cart`,
        { address },
        {
            headers: {
                authToken
            }
        }
    )
}