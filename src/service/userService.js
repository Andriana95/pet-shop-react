// import axios from '../custom-axios/axios'
import Korisnik from "../model/Korisnik";

let mockKorisnik = {
    idKorisnik: 1,
    ime: "Andriana",
    ulica: "Varshavska",
    broj: '11b',
    telefonskiBroj: "070506464",
    email: 'andriana.ilievska@gmail.com'
}

const userService = {
    // getUser: (idKorisnik) => {
    //     return axios.get(`/users/${idKorisnik}`)
    //         .then((result) => {
    //             return Object.assign(new Korisnik(), result.data);
    //         })
    // },

    getUser: (idKorisnik) => {
        return new Promise((resolve, reject) => {
            resolve({
                status: 200,
                data: mockKorisnik
            })
        }).then((result) => {
            return Object.assign(new Korisnik(), result.data);
        })
    },
};


export default userService;
