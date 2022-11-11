import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addCart = (event, item) => {
    event.preventDefault();
    console.log(item);
    let newCart = cart.concat([{item: item, key: Date.now()}]);
    console.log(newCart);
    setCart(newCart);
    setTotal(total + item.price);
  }

  return (
    <div className="App">
      <div className="Section">
      <h1>The Baking Bestie</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem itemData={item} addCart={addCart}/> // replace with BakeryItem component
      ))}
      </div>
      <div className="Section">
        <h2>Cart</h2>
        {cart.map((item) => 
          <div>
            <h3>{item.item.name}</h3>
            <p>{item.item.price}</p>
          </div>
        )}
        <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default App;
