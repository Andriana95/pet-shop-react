import React from 'react';
import productsService from "../../service/productsService";
import {Link} from "react-router-dom";
import ReactCurrencyFormatter from "react-currency-formatter";

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        console.log("Products Component props", props);
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        console.log("vnatre vo getProducts");
        productsService.fetchProducts().then((products) => {
            console.log(products);
            this.setState((previousState) => {
                return {
                    products: products
                }
            })
        });
    }

    render() {
        const productsHTML = this.state.products.map((product) => {
            return (
                <div className="col-4 mb-4" key={product.idProizvod}>
                        <div className="card">
                        <img src={product.slikaUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{product.ime}</h5>
                            <p className="card-text">{product.opis.substring(0, 250)}</p>
                            <p className="card-text">Price: <ReactCurrencyFormatter quantity={product.cena}/></p>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <Link to={{pathname: `/products/${product.idProizvod}`}}
                                  className="btn btn-link ">
                                View
                            </Link>
                            <button className="btn bg-dark text-white position-relative"
                                    onClick={() => this.props.handleAddToCart(product)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        return (<div className="container my-4">
            <div className="row">
                {productsHTML}
            </div>
        </div>);
    }
}

export default Products;
