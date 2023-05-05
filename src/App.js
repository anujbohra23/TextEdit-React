
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
 
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";



function App() {
  const [ mode , setMode]=useState('light') //to check whter dark mode is enabled or not
  const [ alert , setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);

       
  }

  const toggleMode = ()=>{
    if (mode ===  'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Success: Hey,Dark Mode has been enabled")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Success:Hey,Light Mode has been enabled")
    }

  }
  return (
    <> 
{/* <Navbar title="Textutils2" aboutText="About Us"/> */}
{/*<Navbar /> */}
{/* <Router>*/}
 <Navbar title="TextEdit"  mode={mode} toggleMode={toggleMode}/> 
<Alert alert = {alert}/>
<div className="container my-3">

{/* { <Routes>
          <Route exact path="/about"
            element ={<About />}/>
     */}

          {/* <Route exact path="/" */}
         <TextForm showAlert = {showAlert} heading = "enter the text to analyse" 
         mode= {mode} />

     
         
{/* // </Routes> */}

</div>
{/* //  </Router> */} */


</>
  
  );
}

export default App;
