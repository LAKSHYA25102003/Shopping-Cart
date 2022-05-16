import React from "react";
import "./CartItem.css";
class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                <img src="" alt="" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div>Rs 999</div>
                    <div>Qty:1</div>
                    <div className="cart-item-actions">
                        {/* actions buttons */}
                    </div>
                </div>
            </div>  
        )
    }
}

export default CartItem