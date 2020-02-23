import React from 'react';
import './home.css';
import productsService from "../../service/productsService";
import {Link} from "react-router-dom";
import ReactCurrencyFormatter from "react-currency-formatter";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recommendedProducts: []
        }
    }

    componentDidMount() {
        this.getRecommendedProducts();
    }

    getRecommendedProducts() {
        console.log("vnatre vo getProducts");
        productsService.fetchRecommendedProducts().then((recommendedProducts) => {
            console.log(recommendedProducts);
            this.setState((previousState) => {
                return {
                    recommendedProducts: recommendedProducts
                }
            })
        });
    }

    render() {
        const productsCarouselItemsHTML = this.state.recommendedProducts.map((product, index) => {
            return (
                <Link to={{pathname: `/products/${product.idProizvod}`}}
                      key={product.idProizvod}
                      className={'carousel-item img-fluid ' + (index === 0 ? 'active' : '')}>
                    <img src={product.slikaUrl} className="d-block carousel-img img-fluid" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{product.ime}</h5>
                        <p><ReactCurrencyFormatter quantity={product.cena}/></p>
                    </div>
                </Link>
            )
        });

        const carouselControlsHTML = this.state.recommendedProducts.map((product, index) => {
            return <li key={product.idProizvod} className={index === 0 ? 'active' : ''}
                       data-target="#carouselExampleIndicators" data-slide-to={index}/>
        });

        return (
            <div className="container-fluid p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="pb-2 mt-4 mb-2 border-bottom">
                                Welcome
                                <span className="text-muted">&nbsp; to our pet shop</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-12">
                        <p className="h3">Recommended products</p>
                        <div id="carouselExampleIndicators" className="carousel slide"
                             data-ride="carousel">
                            <ol className="carousel-indicators">
                                {carouselControlsHTML}
                            </ol>
                            <div className="carousel-inner">
                                {productsCarouselItemsHTML}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
// const products = (props) => {
//     function getProducts(){
//         console.log("Andriana");
//         return productsService.fetchProducts();
//     }
//
//     return (
//
//         <div>ANda</div>
//     );
// };
// export default products;
//
//
//
//
