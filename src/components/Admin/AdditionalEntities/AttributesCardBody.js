import {Component} from "react";
import ColWithUpdateAction from "./ColWithUpdateAction";


class AttributesCardBody extends Component {
    render() {
        let information = this.props.content
        return(
            <div className={"container custom"}>
                <div className={"row"}>
                    <div className="col">
                        <b>Цвет</b> :
                    </div>
                    <ColWithUpdateAction name={'attributes.color'} value={information.color} id={this.props.foreign_id}/>
                </div>
                <div className={"row"}>
                    <div className="col">
                        <b>Цена</b> :
                    </div>
                    <ColWithUpdateAction name={'attributes.price'} value={information.price} id={this.props.foreign_id}/>
                </div>
                <div className={"row"}>
                    <div className="col">
                        <b>Изображение</b> :
                    </div>
                    <ColWithUpdateAction name={'attributes.image'} value={information.image} id={this.props.foreign_id}/>
                </div>
            </div>
        );
    }
}

export default AttributesCardBody
