import axios from '../custom-axios/axios'

const productsService = {
    fetchProducts: () => {
        return axios.get("/products");
    }
};

export default productsService;
