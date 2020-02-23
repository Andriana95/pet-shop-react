import React from 'react';
import productsService from "../../../service/productsService";

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        const routeIdProizvod = this.props.match.params.idProizvod;
        console.log("routeIdProizvod vo rutata", routeIdProizvod);
        this.getProduct(routeIdProizvod);
    }

    getProduct(idProizvod) {
        console.log("vnatre vo getProducts");
        productsService.getProduct(idProizvod).then((product) => {
            console.log(product);
            this.setState((previousState) => {
                return {
                    product: product
                }
            })
        });
    }

    render() {
        const product = this.state.product;

        const productHTML = product ? (
            <div className="col-4">
                <div className="card">
                    <img src={product.slikaUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.ime}</h5>
                        <p className="card-text">{product.opis.substring(0, 250)}</p>
                    </div>
                </div>
            </div>
        ) : '';

        return (<div className="container my-4">
            <div className="row">
                {productHTML}
            </div>
        </div>);
    }
}

export default ProductDetails;
