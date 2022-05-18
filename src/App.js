import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
import "./App.css";
class App extends React.Component {
  constructor()
    {
        super();
        this.state={
            products:[
                {
                    price:999,
                    title:"Mobile Phone",
                    qty:1,
                    img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327",
                    id:1
                },
                {
                    price:999,
                    title:"Watch",
                    qty:1,
                    img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388",
                    id:2
                },
                {
                    price:999,
                    title:"Laptop",
                    qty:1,
                    img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
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
    getCartCount=()=>{
      let {products}=this.state;
      let c=0
      products.forEach((product)=>{
        c=c+product.qty;
      })
      return c;
    }
    getTotal=()=>{
        let Totalprice=0;
        let products=this.state.products;
        products.forEach((product)=>{
            Totalprice=Totalprice+product.qty*product.price;
        })
        return Totalprice;
    }
    render(){
      const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart products={products} increaseQuantity={this.HandleIncreaseQuantity} decreaseQuantity={this.HandleDecreaseQuantity} deleteQuantity={this.HandleDeleteQuantity}/>
      <div className="TotalCartPrice">
          Total Price:{this.getTotal()}
      </div>
    </div>
  )
    }
}

export default App;
