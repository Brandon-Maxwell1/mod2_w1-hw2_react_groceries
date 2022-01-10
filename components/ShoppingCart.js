class ShoppingCart extends React.Component {
    render(){
        return(
            <li>{this.props.grocery.item} {this.props.grocery.brand}</li>
        )
    }
}