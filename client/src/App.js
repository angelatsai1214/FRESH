import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    const fetchMessage = async () => {  // fetch data from backend
      const response = await fetch("http://localhost:5000"); // proven got the data back
      const { message } = await response.json(); // responseObject.message from backend
      setMessage(message);
    };
    fetchMessage();
  }, []);   // execute only once


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message} {/*  put backend variables on page */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
