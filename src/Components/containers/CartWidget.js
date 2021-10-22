import { Component } from "react";
export {CartWidget}



class CartWidget extends Component { 

render(){
    return(
        <h1 className="cart-logo"><i className="fas fa-shopping-cart"></i></h1>
    );
}
}

export default CartWidget