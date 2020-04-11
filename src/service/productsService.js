import axios from '../custom-axios/axios'
import Proizvod from "../model/Proizvod";

const productsService = {
    fetchProducts: () => {
        return axios.get("/products")
            .then((result) => {
                return result.data.map((productJSON) => {
                    return Object.assign(new Proizvod(), productJSON);
                })
            })
    },
    getProduct: (idProizvod) => {
        return axios.get(`/products/${idProizvod}`)
            .then((result) => {
                return Object.assign(new Proizvod(), result.data);
            })
    },
    createProduct: (productData) => {
        return axios.post("/products", productData);
    },
    createOrder: (orderData) => {
        return axios.post("/products/order", orderData);
    },
    fetchRecommendedProducts: (idProizvod) => {
        return axios.get("/products/recommended")
            .then((result) => {
                   return result.data.map((productJSON) => {
                         return Object.assign(new Proizvod(), productJSON);
                   })
            })
    },

    // fetchProducts: () => {
    //     return new Promise((resolve, reject) => {
    //         resolve({
    //             status: 200,
    //             data: mockProizvodi
    //         });
    //     }).then((result) => {
    //         return result.data.map((productJSON) => {
    //             return Object.assign(new Proizvod(), productJSON);
    //         });
    //     })
    // },
    //
    // fetchRecommendedProducts: () => {
    //     return new Promise((resolve, reject) => {
    //         resolve({
    //             status: 200,
    //             data: mockProizvodi.slice(0, 3)
    //         });
    //     }).then((result) => {
    //         return result.data.map((productJSON) => {
    //             return Object.assign(new Proizvod(), productJSON);
    //         })
    //     })
    // },
    //
    // getProduct: (idProizvod) => {
    //     return new Promise((resolve, reject) => {
    //         resolve({
    //             status: 200,
    //             data: mockProizvodi.find((mockProizvod) => mockProizvod.idProizvod === +idProizvod)
    //         })
    //     }).then((result) => {
    //         return Object.assign(new Proizvod(), result.data);
    //     })
    // },
};


export default productsService;
