class Grocery extends React.Component {

    state= {
        isPurchased: false
    }

    // togglePurchase = () => {
    //     this.setState({
    //         isPurchased: !this.state.isPurchased
    //     })
    // }

    toggleButton = () => {
        this.setState({
            isPurchased: this.state.isPurchased
            ?
            !this.state.isPurchased
            : ''
        })
    }

    render(){
        console.log('We up in the Grocery Cart', this.props)
        // console.log(this)
        return(
           
            <li onClick={()=> this.props.handleAdd()}>                
                {this.props.grocery.item}
                {this.props.grocery.brand}                
                <br></br>
                {
                    this.state.isPurchased
                    ?
                    <span> is in shopping cart!</span>
                    : ''
                }
                <br></br>
                {<button id="toggleButton" onClick={this.toggleButton}>Remove</button>}                
            </li>
            // {/* <div>GROCERY</div> */}
            
        )
    }
}