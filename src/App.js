import React,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  // what this function is returning is a JSX
  // JSX is a combination of kind of 90% html with a 10% of js
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
         setAlert(null)
      },1500)
  }
  const toggleMode=()=>{
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils -LightMode'
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(26 37 68)';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils -DarkMode'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      {/* <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
      </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
