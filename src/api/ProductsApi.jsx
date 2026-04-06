import axios from "axios";

export const getAllProducts = async() => {
    try {
        let res = await axios.get(`https://dummyjson.com/products?limit=50&skip=90`)
        return res.data.products;
    } catch (e) {
        console.log("Error in fetching Details ->",e);
    }
}

export const fetchProduct = async({params}) => {
    const {id} = params;
    try {
        let res = await axios.get(`https://dummyjson.com/products/${id}`)
        return res.data;
        
    } catch (e) {
        console.log("Error in fetching Details ->",e);
        throw new Error("Failed to load product")
    }
}

