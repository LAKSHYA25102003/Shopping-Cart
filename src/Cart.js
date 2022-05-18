import './Cart.css'
import CartItems from "./CartItem";
const Cart = (props)=>{
    
    
        const {products}=props;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItems product={product} key={product.id} increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} deleteQuantity={props.deleteQuantity}/>
                })}
            </div>
        )
    
}

export default Cart;