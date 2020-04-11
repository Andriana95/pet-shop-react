import React from 'react';
import productsService from "../../../service/productsService";
import { withRouter } from "react-router-dom";
class CreateProduct extends React.Component {

    constructor(props) {

        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
  // TODO: zemi gi site manufacturers i categories
        //Prikazi gi vo SELECT polinja za da moze da odbere covekot
   }

     handleSubmit =(e)=> {
        console.log('The value is: ' + this.inputName.value);
          console.log('The value is: ' + this.inputDescription.value);
          console.log('The value is: ' + this.inputPrice.value);
          e.preventDefault();


         let productData = {
             name: this.inputName.value,
             description: this.inputDescription.value,
             price: Number(this.inputPrice.value),
             manufacturerName: this.inputManufacturer.value,
             categoryName: this.inputCateegory.value,
             age: this.inputAge.value,
             weight: this.inputWeight.value,
             img: this.inputImage.value
         };

         productsService.createProduct(productData)
            .then((response) => {
                console.log("responsot e --->")
                 console.log(response);
                 // TODO: odnesi go korisnikot na ruta za detali za kreiraniot produkt
              // /products/:productId/details
              //   history.push('/products');
                this.props.history.push("/products");
             })
     };

    render() {
        return (
            <div className="container bg-light text-center">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label className="h5 text-left">
                            Name:
                            <input type="text" name="ime" ref={(input) => this.inputName = input}
                                   className="form-control  form-control-lg"/>

                        </label>
                    </div>
                    <div className="form-group">
                        <label  className="h5 text-left">
                            Description:
                            <input type="text" name="description" ref={(input) => this.inputDescription = input}
                                   className="form-control  form-control-lg"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label  className="h5 text-left">
                            Age:
                            <input type="text" name="age" ref={(input) => this.inputAge= input}
                                   className="form-control  form-control-lg"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label  className="h5 text-left">
                            Weight:
                            <input type="text" name="weight" ref={(input) => this.inputWeight = input}
                                   className="form-control  form-control-lg"/>
                        </label>

                    </div>


                    <div className="form-group">
                        <label  className="h5 text-left">
                            Price:
                            <input type="number" name="price" ref={(input) => this.inputPrice = input}
                                   className="form-control form-control-lg" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label  className="h5 text-left">
                            Category:
                            <input type="text" name="category" ref={(input) => this.inputCateegory = input}
                                   className="form-control  form-control-lg"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label  className="h5 text-left">
                            Manufacturer:
                            <input type="text" name="manufacturer" ref={(input) => this.inputManufacturer = input}
                                   className="form-control  form-control-lg"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label  className="h5 text-left">
                            Image:
                            <input type="text" name="image" ref={(input) => this.inputImage = input}
                                   className="form-control  form-control-lg"/>
                        </label>

                    </div>

                    <input type="submit" value="Submit" className=" btn btn-success btn-lg"/>
                </form>
            </div>
        );
    }
}

export default CreateProduct;
