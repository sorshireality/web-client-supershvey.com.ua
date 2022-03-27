import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import ProductList from "./ProductList";
import OrderList from "../Order/OrderList";
import SingleOrderOverview from "../Order/SingleOrderOverview";
import SingleProductOverview from "./SingleProductOverview";

class ProductPage extends Component {
    state = {
        products: false,
    }

    constructor(props) {
        super(props);
        this.getOrders()
    }

    getOrders() {
        fetch("/v1/public/api/products")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    products: result
                })
            })
    }

    render() {
        if (!this.state.products) {
            return (
                <div>
                    <img src="/v1/public/images/anime_loader.gif" alt=""/>
                </div>
            )
        }
        return (
            <Routes>
                <Route path="" exact element={<ProductList products={this.state.products}/>}/>
                <Route path=":id" element={<SingleProductOverview/>}/>
            </Routes>
        )
    }
}

export default ProductPage
