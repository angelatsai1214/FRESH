import React, { useEffect, useState } from "react";
import logo from './freshlogo.png';
import background from './d2B90dLCNy4.png';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ // rerendering when things change
    item: "",
    quantity: 1,
    expDate: "",
  });
  
  useEffect(() => {
    const fetchMessage = async () => {  // fetch data from backend
      const response = await fetch("http://localhost:5000"); // proven got the data back
      const { message } = await response.json(); // responseObject.message from backend
      setMessage(message);
    };
    fetchMessage();
  }, []);   // execute only once

  const createItemSubmit =(e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{backgroundImage: `url(${background})` }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Happy Cooking!</h1>
          <p>Your ingredients, our recipes -- a perfect match. Over 5,000 recipes at your finger tips.</p>
          <button type="button">Track your pantry</button>
          <button type="button">Saved recipes</button>
          <h1></h1>
        </div>
        
        <form onSubmit={createItemSubmit} className="add-item-form">
          <label>Item Name</label>
          <input 
          value={form.item}
            onChange={(e) => 
              setForm({
                ...form,
                item: e.target.value,
                }) 
              }
              name="item">
          </input>
          <label>Item Type</label>
          <input 
          value={form.tyle}
            onChange={(e) => 
              setForm({
                ...form,
                type: e.target.value,
                }) 
              }
              name="type">
          </input>
          <label>Item Quantity</label>
          <input 
            value={form.quantity}
            onChange={(e) => 
              setForm({
                ...form,
                quantity: e.target.value,
                }) 
              }
              type="number"
              name="quantity"
          ></input>
          <label>Expiration Date</label>
          <input 
            value={form.expDate}
            onChange={(e) => 
              setForm({
                ...form,
                expDate: e.target.value,
                }) 
              }
            type="date"
            name="expDate"
          ></input>
          <button type="submit">Add Item</button>
        </form>

      </header>
    </div>
  );
}

export default App;
