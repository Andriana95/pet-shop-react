import React from 'react';
import './home.css';
import productsService from "../../service/productsService";
import {Link} from "react-router-dom";
import ReactCurrencyFormatter from "react-currency-formatter";
import {Pie} from "react-chartjs-2";
import {Line} from 'react-chartjs-2';

class Home extends React.Component {
    chartData;
    constructor(props) {
        super(props);
        this.state = {
            recommendedProducts: []
        }
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Products data',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
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
                <Link to={{pathname: `/products/${product.id}`}}
                      key={product.id}
                      className={'carousel-item img-fluid ' + (index === 0 ? 'active' : '')}>
                    <img src={product.img} className="d-block carousel-img img-fluid" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{product.name}</h5>
                        <p><ReactCurrencyFormatter quantity={product.price}/></p>
                    </div>
                </Link>
            )
        });

        const carouselControlsHTML = this.state.recommendedProducts.map((product, index) => {
            return <li key={product.id} className={index === 0 ? 'active' : ''}
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
                <div className="row">
                    <div className="col-12">
                        <Pie data={this.chartData}/>
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
