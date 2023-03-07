import { useState } from "react";
import "./App.css";
// import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import { Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);
  
  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type:type,
  //   })
  //   }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042742';
      // showAlert('enabled dark mode','success');
    //  setInterval(() => {
    //   document.title = 'hehaheha'
    //  }, 2000);
    //  setInterval(() => {
    //   document.title = 'shfhsfhfhsa'
    //  }, 1500);

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // showAlert('enabled light mode','success');
    }
    
  }
  return (
    <>
     <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
     <div className="container my-4 ">
     <Routes>
        <Route exact path="about" element={ <About/> } />
        <Route exact path="/" element={ <TextForm heading='Enter the text to analyze below' mode={mode}/> } />
       
      </Routes>
     {/* <Alert alert={alert}/> */}
     
     </div>
     
    </>
  );
}

export default App;
