import {Component} from "react";
import SingleLineOptionsRow from "../AdditionalEntities/SingleLineOptionsRow";


class SingleProductLine extends Component {
    render() {
        const processClickOnLine = () => {
            let options = document.getElementById(this.props.content.id + "_options")
            let last_display_value = options.style.display
            if (last_display_value === "block") {
                options.style.display = "none"
                options.style.top = options.value
            } else {
                options.style.display = "block"
                let last_top_value = options.offsetTop
                options.style.top = last_top_value - 30
                options.value = last_top_value
            }
        }
        const information = this.props.content
        return (
            <>
                <SingleLineOptionsRow entity_name={"products"} id={information.id}/>

                <tr id={information.id + "_line"} onClick={processClickOnLine} key={information.id}
                    className={"EntityLineFromList"}>

                    <th scope="row">
                        {information.id}

                    </th>
                    <td>{information.name}</td>
                    <td>{information.quantity}</td>
                    <td>{information.category.title}</td>
                    <td>{information.attributes.price}</td>
                    <td>{information.attributes.color}</td>
                </tr>
            </>
        )
    }
}

export default SingleProductLine
