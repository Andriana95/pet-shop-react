import React from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const loggedInUser = {
            idKorisnik: 1
        };

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#petShopNavbar" aria-controls="petShopNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="petShopNavbar">
                    <Link to={"/"} className="navbar-brand">Pet Shop</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/home"} exact className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/products"} exact className="nav-link" href="#">Products</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={{pathname: `/checkout`}} exact className="nav-link">
                                <i className="fa fa-shopping-cart"/>
                                <span className="">{this.props.shoppingCart.length || ''}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={{pathname: `/users/${loggedInUser.idKorisnik}`}} exact className="nav-link">
                                <i className="fa fa-user"/> Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
