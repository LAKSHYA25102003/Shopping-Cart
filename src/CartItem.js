import React from "react";
import "./CartItem.css";
class CartItem extends React.Component{
    // increaseQty=()=>{
    //     // to set the state we have two function,if we do not required prev state than we can we use first functioni
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // })

    //     // fuction second
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty+1
    //         }
    //     })
    // }
    // decreaseQty=()=>{
    //     this.setState((prevState)=>{
    //         if(prevState.qty>0)
    //         {
    //             return {
    //                 qty:prevState.qty-1
    //             }
    //         }
    //     })
    // }
    render(){
        const {price,title,qty}=this.props.product;
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
                        <img
                         src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                         alt="increase" 
                         className="action-icons" 
                         onClick={()=>{
                            this.props.increaseQuantity(this.props.product)
                         }}
                         />
                        <img 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        alt="decrease" 
                        className="action-icons" 
                        onClick={()=>{
                            this.props.decreaseQuantity(this.props.product)
                        }}
                        />
                        <img src="https://t3.ftcdn.net/jpg/00/65/77/26/240_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg" 
                        alt="delete" 
                        className="action-icons" 
                        onClick={()=>{
                            this.props.deleteQuantity(this.props.product)
                        }}
                        />
                    </div>
                </div>
            </div>  
        )
    }
}

export default CartItem