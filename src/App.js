// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";



function App() {
  const  [Mode, setMode] = useState('light');  // it tells us weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert =(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
   setTimeout(()=>{
     setAlert(null);
   },1500);

  }




  const toggleMode =()=>{
    if(Mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode is enabled","success");
    document.title='cyphon-tech-dark'; // changing title of website 
    // setInterval(() => {
    //   document.title='cyphon-tech-dangerous';
    // }, 2000);
    // setInterval(() => {                                             // this is used to attract the people near you
    //   document.title='cyphon-tech-virus';
    // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
      document.title='cyphon-tech-light';
    }
  }
  return (
    <>


 {/* <Router> */}
  <Navbar title="Cyphon-Tech" aboutText="About" Mode={Mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
           
          {/* <Route  path="/"> */}
          <TextForm showAlert={showAlert} heading="enter text"Mode={Mode}/>
            {/* <About/> */}
          {/* </Route>
        </Switch> */}
        
  </div>
        {/* </Router> */}
 


  </>
  );
}

export default App;
