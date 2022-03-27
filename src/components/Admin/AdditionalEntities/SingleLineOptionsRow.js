import {Component} from "react";
import {Link} from "react-router-dom";


class SingleLineOptionsRow extends Component {
    render() {
        const removeEntityById = (id) => {
            console.log("Entity with id - " + id + ", has been removed")
            document.getElementById(this.props.entity_name + "_list_tbody").removeChild(document.getElementById(id + "_options"))
            document.getElementById(this.props.entity_name + "_list_tbody").removeChild(document.getElementById(id + "_line"))

            const requestOptions = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }
            new Promise((resolve, _) => {
                fetch('/v1/public/api/' + this.props.entity_name + '/' + id, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        resolve(data.data)
                    })
            })

        }
        return <tr className={"additionalOptionsForEntityOnList"} id={this.props.id + "_options"}>
            <td onClick={() => {
                removeEntityById(this.props.id)
            }}>Удалить
            </td>

            <td>
                <Link to={'/v1/public/admin/' + this.props.entity_name + '/' + this.props.id}>Просмотр </Link>
            </td>

        </tr>;
    }
}

export default SingleLineOptionsRow
