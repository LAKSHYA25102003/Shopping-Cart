import React from "react";
import './Cart.css'
import CartItems from "./CartItem";
class Cart extends React.Component{
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    price:999,
                    title:"Mobile Phone",
                    qty:1,
                    img:"",
                    id:1
                },
                {
                    price:999,
                    title:"Watch",
                    qty:1,
                    img:"",
                    id:2
                },
                {
                    price:999,
                    title:"Laptop",
                    qty:1,
                    img:"",
                    id:3
                }
            ]
        }
    }
    HandleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty++;
        this.setState({
            products:products
        })
    }
    HandleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty>0)
        {
            products[index].qty--;
        }
        this.setState({
            products:products
        })
    }
    HandleDeleteQuantity=(product)=>{
        let {products}=this.state;
        const index=products.indexOf(product);
        products.splice(index,1);
        this.setState({
            products:products
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItems product={product} key={product.id} increaseQuantity={this.HandleIncreaseQuantity} decreaseQuantity={this.HandleDecreaseQuantity} deleteQuantity={this.HandleDeleteQuantity}/>
                })}
            </div>
        )
    }
}

export default Cart;