import React from "react";
import './Cart.css'
import CartItems from "./CartIems";
class Cart extends React.Component{
    render(){
        return(
            <div className="cart">
                <CartItems/>
                <CartItems/>
                <CartItems/>
            </div>
        )
    }
}

export default Cart;