import React, {Component} from "react";
import {Link} from "react-router-dom";
import SingleLineOptionsRow from "../AdditionalEntities/SingleLineOptionsRow";

class SingleCustomerLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const information = this.props.content
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
        return (
            <>
                <SingleLineOptionsRow entity_name={"customers"} id={information.id}/>
                <tr key={information.id} onClick={processClickOnLine} id={information.id+"_line"} className={"EntityLineFromList"}>

                    <th scope="row">
                            {information.id}

                    </th>
                    <td>{information.name}</td>
                    <td>{information.lastname}</td>
                    <td>{information.phone}</td>
                    <td>{information.email}</td>
                </tr>

            </>
        )
    }
}

export default SingleCustomerLine
