class App extends React.Component {

    state = {
        grocery: groceryList,
        item: '',
        brand: '',
        units: 0,
        cartItems: []
    }

    addToCart = stuff => {
        // console.log('We in this thang', stuff)
        this.setState({
            cartItems: [stuff, ...this.state.cartItems]
        })
    }

    render() {
        // console.log('APP', this.state.groceries)
        // console.log('CART', this.state.cartItems)
        return (
            <div>
                <h1>BrAmazon</h1>

                <div id='create-product'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='item'>Item:</label>
                        <input id='item' type='text' value={this.state.name} onChange={this.handleChange} />
                        <label htmlFor='brand'>Brand:</label>
                        <input id='brand' type='text' value={this.state.price} onChange={this.handleChange} />
                        <label htmlFor='units'>Units:</label>
                        <input id='units' type='number' value={this.state.units} onChange={this.handleChange} />
                        <input type='submit' />
                    </form>

                    <div className='preview'>
                        <h2>Preview our new item</h2>
                        <h3>{this.state.items}</h3>
                        <h4>{this.state.brand}</h4>
                        <h5>{this.state.units}</h5>
                    </div>
                </div>

                <div className="groceries">
                    <h3>You Gotta Buy Our Dope Stuff</h3>
                    <ul>
                        {
                            this.state.grocery.map(grocery => {
                                return (
                                    <Grocery 
                                    grocery={grocery} handleAdd={this.addToCart} />
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="cart">
                    <h3 id="shoppingCart">Shopping Cart</h3>
                    <ul>
                        {
                            this.state.cartItems.map(stuff => {
                                return (
                                    <ShoppingCart grocery={stuff} />
                                )
                            })
                        }


                    </ul>
                </div>

            </div>
        )
    }
}

// console.table(groceryList)


ReactDOM.render(
    <App />,
    document.querySelector("#container")
)