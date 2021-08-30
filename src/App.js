// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



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


  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }



  const toggleMode =(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(Mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode is enabled","success");
  
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


 <Router>
  <Navbar title="Cyphon-Tech" aboutText="About" Mode={Mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About Mode={Mode} />
          </Route>
           
          <Route  path="/">
          <TextForm showAlert={showAlert} heading="Try Cyphon-Tech - Word & Char counter , RemoveSpaces"Mode={Mode}/>
           </Route>
        </Switch> 
        
  </div>
        </Router>
 


  </>
  );
}

export default App;
