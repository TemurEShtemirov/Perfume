import { useState, useEffect } from "react";
import "./Cart.css"
const Cart = () => {
    let [items, setItems] = useState(
      JSON.parse(localStorage.getItem("items")) || []
    );

    
    useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items));

      console.log(`Saved ${items.length} items to localstorage`);
    }, [items]); 

  
    const addToCart = () => {
      setItems([...items, `Product ${Date()}`]);
    };

    return (
      <div className="Cart">
        <button
          type="button"
          className="btnSubmit mt-3 btn btn-outline-danger"
          onClick={addToCart}
        >
          Add To Cart
        </button>
        <ul>
          {items.map((item, i) => (
            <li class="form-control border-success li   " key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
}
export default Cart;