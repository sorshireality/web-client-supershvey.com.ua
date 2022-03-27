import {Component} from "react";
import ColListWithFetchedOptions from "../AdditionalEntities/ColListWithFetchedOptions";


class ProductGeneralInfoAddForm extends Component {
    getAddForm() {
        const handleSelectChange = (event) => {
            let target = document.getElementById("categories_add_form")
            if (event.target.value === "add_new_categories") {
                target.style.visibility = "visible"
                target.getElementsByTagName("input")[0].setAttribute("required", true)
            } else {
                target.style.visibility = "hidden"
                target.getElementsByTagName("input")[0].removeAttribute("required")
            }
            this.props.changingHandler(event)
        }
        return <div className="input-group" id={"addressForm"}>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Название</span>
                <input required={true} onChange={this.props.changingHandler} name={"product_name"} type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Описание</span>
                <input required={true} onChange={this.props.changingHandler} name={"product_description"} type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Количество</span>
                <input required={true} onChange={this.props.changingHandler} name={"product_quantity"} type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Категория</span>
                < ColListWithFetchedOptions resource={"categories"} name={"product_category_id"}
                                            onChange={handleSelectChange}/>

                <div style={{"visibility": "hidden"}} id="categories_add_form"
                     className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Название категории</span>
                    <input onChange={this.props.changingHandler} name={"new_category_name"} type="text"
                           className="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>

        </div>
    }

    render() {
        return this.getAddForm();
    }
}

export default ProductGeneralInfoAddForm
