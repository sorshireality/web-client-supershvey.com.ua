import {Component} from "react";
import SingleOrderLine from "../Order/SingleOrderLine";
import SingleProductLine from "./SingleProductLine";

class ProductList extends Component {
    state = {
        product_list: false
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let products = []
        this.props.products.data.map(item => {
            products.push(this.getProductById(item.id))
        })
        Promise.all(products).then(r => {
            this.setState({
                product_list: r,
            })
        })
    }

    getProductById = (id) => {
        return new Promise((resolve) => {
            fetch("/v1/public/api/products/" + id)
                .then(res => res.json())
                .then((result) => {
                    resolve(result.data)
                })
        })
    }

    render() {
        const placeholder = () => {
            return (
                <tr className={"placeholder-glow"}>
                    <td><span className={"placeholder col-4"}/></td>
                    <td><span className={"placeholder col-4"}/></td>
                    <td><span className={"placeholder col-4"}/></td>
                    <td><span className={"placeholder col-4"}/></td>
                    <td><span className={"placeholder col-4"}/></td>
                    <td><span className={"placeholder col-4"}/></td>
                </tr>
            )
        }
        let crab = null

        if (this.state.product_list) {
            crab = this.state.product_list.map(value => {
                return (
                    <SingleProductLine key={value.id} content={value}/>
                )
            })
        }

        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Категория</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Цвет</th>
                </tr>
                </thead>
                <tbody id={"products_list_tbody"}>
                {crab ?? placeholder()}
                <tr>
                    <td colSpan={6}>Количество продуктов : {this.state.product_list.length}</td>
                </tr>
                </tbody>

            </table>
        )
    }
}

export default ProductList
