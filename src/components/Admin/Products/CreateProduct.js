import {Component} from "react";
import CustomerAddForm from "../FormForAddingEntities/CustomerAddForm";
import AddressAddForm from "../FormForAddingEntities/AddressAddForm";
import ProductGeneralInfoAddForm from "../FormForAddingEntities/ProductGeneralInfoAddForm";
import AttributesAddForm from "../FormForAddingEntities/AttributesAddForm";


class CreateProduct extends Component {
    state = {
        new_categories: false
    }

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value});
    }


    handleSubmit(event) {
        let product_id
        event.preventDefault();
        let before_product_creations = []
        if (this.state.product_category_id === "add_new_categories") {
            before_product_creations.push(new Promise((resolve, _) => {
                const requestAddressOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        title: this.state.new_category_name,
                    })
                };
                fetch('/v1/public/api/categories', requestAddressOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({
                            new_categories: data.data.id
                        })
                        resolve("OK")
                    });
            }))
        }

        Promise.all(before_product_creations).then((_) => {
            new Promise((resolve, _) => {
                const requestAddressOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: this.state.product_name,
                        description: this.state.product_description,
                        quantity: this.state.product_quantity,
                        category_id: this.state.new_categories ? this.state.new_categories : this.state.product_category_id,
                    })
                };
                fetch('/v1/public/api/products', requestAddressOptions)
                    .then(response => response.json())
                    .then(data => {
                        resolve(data.data.id)
                    });
            }).then((r) => {
                const requestAddressOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        product_id: r,
                        color: this.state.attributes_color,
                        price: this.state.attributes_price,
                        image: this.state.attributes_image,
                    })
                };
                fetch('/v1/public/api/attributes', requestAddressOptions)
                    .then(response => response.json())
                    .then(_ => {
                        window.location = "/v1/public/admin/products/" + r
                    });
            })
        })
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"} id={"progress_bar"} style={{"textAlign": "center"}}>
                    <div className="col">
                        1
                    </div>
                    <div className="col">
                        2
                    </div>
                    <div className="col">
                        3
                    </div>
                    <div className="col">
                        4
                    </div>
                </div>
                <form id={"create_entity_imb_form"} name={"create_entity_imb_form"} onSubmit={this.handleSubmit}>
                    <div className={"container"}>
                        <div className="row">
                            <div className="col">
                                <h4 align={"center"}>Общая информация</h4>
                                <ProductGeneralInfoAddForm changingHandler={this.handleChange}/>
                            </div>
                            <div className="col">
                                <h4 align={"center"}>Аттрибуты товара</h4>
                                <AttributesAddForm changingHandler={this.handleChange}/>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <input form={"create_entity_imb_form"} type={"submit"}
                           className={"col align-self-end btn btn-primary"}
                           value={"Отправить"}/>
                </form>
            </div>
        );
    }
}

export default CreateProduct
