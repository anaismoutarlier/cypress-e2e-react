import logo from './logo.svg';
import './App.css';
import Form from "./pages/Form";
import Success from "./pages/Success";

import { useState } from "react";
function App() {
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleClick = e => {
    e.preventDefault();
    setSubmitted(true);
  }
  return submitted ? <Success /> : <Form data={data} handleChange={handleChange} handleClick={handleClick}/>
}

export default App;
