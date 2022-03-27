import {Component} from "react";


class AttributesAddForm extends Component{
    getAddForm() {
        return <div className="input-group" id={"addressForm"}>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Цвет</span>
                <input required={true} onChange={this.props.changingHandler} name={"attributes_color"} type="text" className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Цена</span>
                <input required={true} onChange={this.props.changingHandler} name={"attributes_price"} type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Изображение</span>
                <input required={true} onChange={this.props.changingHandler} name={"attributes_image"} type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </div>
    }
    render() {
        return this.getAddForm();
    }
}
export default AttributesAddForm
