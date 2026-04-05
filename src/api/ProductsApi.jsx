import axios from "axios";

export const getAllProducts = async() => {
    try {
        let res = await axios.get(`https://dummyjson.com/products`)
        console.log("API Hitted!!");
        return res.data.products;
    } catch (e) {
        console.log("Error in fetching Details ->",e);
    }
}