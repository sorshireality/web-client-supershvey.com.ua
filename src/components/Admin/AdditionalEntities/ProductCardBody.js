import {Component} from "react";
import ColWithUpdateAction from "./ColWithUpdateAction";
import ColListWithFetchedOptions from "./ColListWithFetchedOptions";


class ProductCardBody extends Component {
    render() {
        let information = this.props.content
        console.dir(information)
        return (
            <div className={"container custom"}>
                <div className={"row"}>
                    <div className="col">
                        <b>Название</b> :
                    </div>
                    <ColWithUpdateAction name={'products.name'} value={information.name} id={information.id}/>
                </div>
                <div className={"row"} style={{"height" : "auto"}}>
                    <div className="col">
                        <b>Описание</b> :
                    </div>
                    <ColWithUpdateAction name={'products.description'} value={information.description}
                                         id={information.id}/>
                </div>
                <div className={"row"}>
                    <div className="col">
                        <b>Количество</b> :
                    </div>
                    <ColWithUpdateAction name={'products.quantity'} value={information.quantity} id={information.id}/>
                </div>
                <div className={"row"}>
                    <div className="col">
                        <b>Категория</b> :
                    </div>
                    <div className={"col"}>{information.category.title}</div>
                </div>
            </div>
        );
    }
}

export default ProductCardBody
