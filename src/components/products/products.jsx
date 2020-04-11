import React from 'react';
import productsService from "../../service/productsService";
import {Link} from "react-router-dom";
import './product.css';

class Products extends React.Component {
    chartData;

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
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
                <div className="col-4 mb-4" key={product.id}>

                    <div className="card">
                        <div className="card-body">
                            <img src={product.img} className="card-img-top rounded" alt="..."/>

                            <h5 className="card-title card-header  text-center text-dark">{product.name} </h5>
                            <h5 className="card-title card-body  text-center text-dark">{product.manufacturer.name} </h5>

                            <p className="card-text card-body text-left text-info h5">{product.description.substring(0, 250)}</p>
                            {/*<p className="card-text card-body text-left text-info h6"><span>Weight: {product.weight.substring(0, 250)}</span></p>*/}
                            {/*<p className="card-text card-body text-left text-info h6"><span>Category:{product.category.name.substring(0, 250)}</span></p>*/}


                            {/*<p className="card-text">{product.age.substring(0, 250)}</p>*/}
                            {/*<p className="card-text">Price: <ReactCurrencyFormatter quantity={product.price}/></p>*/}

                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <Link to={{pathname: `/products/${product.id}`}}
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
