import React from "react";
import "./CartItem.css";
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:"Mobile Phone",
            qty:1,
            img:""
        }
    }
    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                <img src="" alt="" className="productImage" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="increase" className="action-icons" />
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992683.png" alt="decrease" className="action-icons" />
                        <img src="https://t3.ftcdn.net/jpg/00/65/77/26/240_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>  
        )
    }
}

export default CartItem