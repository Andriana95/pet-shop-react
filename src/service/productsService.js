import axios from '../custom-axios/axios'
import Proizvod from "../model/Proizvod";

// let mockProizvodi = [{
//     idProizvod: 1,
//     ime: "Proizvod1",
//     preporachanaVozrast: 13,
//     preporachanaKilaza: 22,
//     cena: 23.2,
//     kolichina: 300,
//     kategorija: {},
//     proizvoditel: {},
//     opis: "Ovoj prozivod e mn ubav",
//     slikaUrl: "https://ae01.alicdn.com/kf/H9831998e940a467c924fc8c6d51d50b8J.jpg"
// }, {
//     idProizvod: 2,
//     ime: "Proizvod2",
//     preporachanaVozrast: 5,
//     preporachanaKilaza: 33,
//     cena: 44.2,
//     kolichina: 155,
//     kategorija: {},
//     proizvoditel: {},
//     opis: "Ovoj prozivod e mn ubav 2",
//     slikaUrl: "https://ae01.alicdn.com/kf/H1810067173514e23b1e0245093f7ff6bG/5-7-cm-Dog-Toy-Interactive-Rubber-Balls-Pet-Dog-Cat-Puppy-Elasticity-Teeth-Ball-Dog.jpg"
// }, {
//     idProizvod: 3,
//     ime: "Proizvod3",
//     preporachanaVozrast: 5,
//     preporachanaKilaza: 33,
//     cena: 44.2,
//     kolichina: 155,
//     kategorija: {},
//     proizvoditel: {},
//     opis: "Ovoj prozivod e mn ubav 3",
//     slikaUrl: "https://images.petplanet.co.uk/images/product_images/extra_images/56102/99_56102_1529569131_bca1d9.jpg"
// }, {
//     idProizvod: 4,
//     ime: "Proizvod4",
//     preporachanaVozrast: 5,
//     preporachanaKilaza: 33,
//     cena: 44.2,
//     kolichina: 155,
//     kategorija: {},
//     proizvoditel: {},
//     opis: "Ovoj prozivod e mn ubav 4",
//     slikaUrl: "https://images-na.ssl-images-amazon.com/images/I/61Q3eX-PMhL._SL1000_.jpg"
// }];

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
    fetchRecommendedProducts: (idProizvod) => {
        return axios.get(`/products/recommended`)
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
