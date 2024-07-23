// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

export function App() {
  const [Mode, setMode] = useState('light'); //Whether dark mode enable or not 
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type
    });
    setTimeout(() => {
    }, 3000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "Sucess");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    //  JSX:It is basically the html,but written in react includeing some little changes.i.e In react the html and javascript both are written in single waysuch that where we use the javascript there we the {} bricket.
    // 
    <>
        <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <About/> */}
        <TextForm showAlert={showAlert} Heading="Enter the Text to Analyzed" Mode={Mode} />
      <Router>  
        <div className="container my-3">
           <Routes>
            <Route path= "/about"element={<About Mode = {Mode} />}></Route>
            <Route path="/Home"element={<TextForm showAlert={showAlert} Heading="TrxtUtils - Word Counter,Character Counter,Remove Extra Spaces" Mode = {Mode} />}></Route> 
           </Routes> 
           </div>
          </Router>
        
    </>
  );
}

export default App;
 