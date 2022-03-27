import {Component} from "react";


class ColListWithFetchedOptions extends Component {
    state = {
        isLoaded: false,
        options_list: false
    }

    getOptionsList() {
        let options_list = []
        fetch('/v1/public/api/' + this.props.resource).then(
            (response) => {
                return response.json()
            }).then((list) => {
            list.data.forEach((item) => {
                options_list.push(
                    <option key={item.id} value={item.id}>{item.title}</option>
                )
            })
            options_list.push(
                <option key={"add_new_" + this.props.resource} value={"add_new_" + this.props.resource}>Добавить</option>
            )
            this.setState({
                isLoaded: true,
                options_list: options_list
            })
        })
    }

    componentDidMount() {
        this.getOptionsList()
    }

    render() {
        return (
            <select name={this.props.name} onChange={this.props.onChange}>
                {this.state.isLoaded ? this.state.options_list : <option>Loading..</option>}
            </select>
        );
    }
}

export default ColListWithFetchedOptions
