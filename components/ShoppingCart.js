class ShoppingCart extends React.Component {

    state = {
        isInCart: true
    }

    toggleButton = () => {
        this.setState({
            isInCart: !this.state.isInCart            
        })
    }
    render() {
        return (
            <li>{this.props.grocery.brand} {" "} {this.props.grocery.item}
                <br></br>
                {<button id="toggleButton" onClick={this.toggleButton}>Remove</button>}
            </li>
        )
    }
}