import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Products from './components/products/products';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import ProductDetails from "./components/products/product-details/product-details";
import Profile from "./components/profile/profile";
import Checkout from "./components/checkout/checkout";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SHOPPING_CART_STORAGE_KEY = "shoppingCart";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: JSON.parse(localStorage.getItem(SHOPPING_CART_STORAGE_KEY)) || []
        };

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        this.handleResetCart = this.handleResetCart.bind(this);
        this.handleBuyCart = this.handleBuyCart.bind(this);
    }

    handleAddToCart(addToCartProduct) {
        console.log("handleAddToCart called with", addToCartProduct);
        let shoppingCart = this.state.shoppingCart;
        const existingItemIndex = shoppingCart.findIndex((cartItem) => {
            return cartItem.product.idProizvod === addToCartProduct.idProizvod
        });

        if (existingItemIndex === -1) {
            shoppingCart.push({
                product: addToCartProduct,
                amount: 1
            });
        } else {
            shoppingCart[existingItemIndex].amount += 1;
        }

        this.setState({
            shoppingCart: shoppingCart
        }, () => {
            // After the state is changed, we store the products in local storage so when we
            // refresh the screen they are still in the cart
            localStorage.setItem(SHOPPING_CART_STORAGE_KEY, JSON.stringify(shoppingCart));
            toast.info("The item has been added to the shopping cart");
        })
    }

    handleRemoveFromCart(removeFromCartProduct) {
        console.log("handleRemoveFromCart called with", removeFromCartProduct);
        let shoppingCart = this.state.shoppingCart;
        const productInCartIndex = shoppingCart.findIndex((cartItem) => {
            return cartItem.product.idProizvod === removeFromCartProduct.idProizvod
        });

        if (productInCartIndex !== -1) {
            shoppingCart.splice(productInCartIndex, 1);
        }

        this.setState({
            shoppingCart: shoppingCart
        }, () => {
            localStorage.setItem(SHOPPING_CART_STORAGE_KEY, JSON.stringify(shoppingCart));
            toast.info("The item has been removed");
        })
    }

    handleResetCart() {
        console.log("handleResetCart");
        this.setState({
            shoppingCart: []
        }, () => {
            localStorage.removeItem(SHOPPING_CART_STORAGE_KEY);
            toast.warn("The shopping cart has been reset");
        })
    }

    handleBuyCart() {
        console.log("handleBuyCart");
        this.setState({
            shoppingCart: []
        }, () => {
            localStorage.removeItem(SHOPPING_CART_STORAGE_KEY);
            toast.success("The items have been purchased successfully");
        })
    }

    render() {
        const routing = (
            <BrowserRouter>
                <Header shoppingCart={this.state.shoppingCart}/>
                <main role="main" className="main container-fluid flex-grow">
                    <div className="row">
                        <Route path="/home" exact component={Home}/>
                        <Route path="/products" exact component={() => {
                            return <Products handleAddToCart={this.handleAddToCart}/>
                        }}/>
                        <Route path="/products/:idProizvod" exact component={ProductDetails}/>
                        <Route path="/users/:idKorisnik" exact component={Profile}/>
                        <Route path="/checkout/" exact component={() => {
                            return <Checkout shoppingCart={this.state.shoppingCart}
                                             handleRemoveFromCart={this.handleRemoveFromCart}
                                             handleResetCart={this.handleResetCart}
                                             handleBuyCart={this.handleBuyCart}/>
                        }}/>
                        <Route exact path={"/"}>
                            <Redirect to="/home"/>
                        </Route>
                    </div>
                </main>
                <Footer/>
                <ToastContainer autoClose={5000} position={toast.POSITION.BOTTOM_RIGHT}/>
            </BrowserRouter>
        );

        return (
            <div className="App">
                {routing}
            </div>
        );
    }
}

export default App;
