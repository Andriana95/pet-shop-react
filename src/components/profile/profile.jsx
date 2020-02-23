import React from 'react';
import './profile.css';
import userService from "../../service/userService";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const routeIdKorisnik = this.props.match.params.idKorisnik;
        console.log("routeIdKorisnik vo rutata", routeIdKorisnik);
        this.getUser(routeIdKorisnik);
    }



    getUser(idKorisnik) {
        console.log(`vnatre vo getUser(${idKorisnik})`);
        userService.getUser(idKorisnik).then((user) => {
            console.log(user);
            this.setState((previousState) => {
                return {
                    user: user
                }
            })
        });
    }

    render() {
        return "korisnik works"
    }
}

export default Profile;
