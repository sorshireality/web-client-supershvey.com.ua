import {Component} from "react";
import ProductCardBody from "../AdditionalEntities/ProductCardBody";
import AttributesCardBody from "../AdditionalEntities/AttributesCardBody";


class SingleProductOverview extends Component {
    state = {
        product: false,
        isLoaded: false
    }
    componentDidMount() {
        let id = window.location.pathname.split('/').pop()
        this.getProductById(id).then(
            (result) => {
                this.setState({
                    product: result,
                    isLoaded: true
                })
            }
        )
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
        return (
            <div className="container placeholder-glow">
                <div id={"orderOverviewHeader"}>
                    <div className="row justify-content-between">
                        <div className="col-2">
                            Продукт № {this.state.isLoaded ? this.state.product.id :
                            <div className="placeholder col-4"/>}
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                О продукте
                            </div>
                            <div className="card-body">
                                {this.state.isLoaded ? <ProductCardBody content={this.state.product}/> :
                                    <div className={"placeholder col-8"}/>}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Аттрибуты
                            </div>
                            <div className="card-body">
                                {this.state.isLoaded ? <AttributesCardBody foreign_id={this.state.product.id} content={this.state.product.attributes}/> :
                                    <div className={"placeholder col-8"}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleProductOverview
