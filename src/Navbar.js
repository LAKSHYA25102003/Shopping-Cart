
import "./Navbar.css";


const Navbar=(props)=>{
    
        return(
            <div className="nav">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart-icon" />
                    <span>{props.count}</span>
                </div>
            </div>
        )
    
}
export default Navbar