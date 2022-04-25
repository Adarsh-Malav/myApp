
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm'
import Users from './component/Users'
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const [mode, setMode] = useState('light')


const toggleMode = () => {
  if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
  }
};
  return (
    <>
  <Router>
   <Navbar title="Adarsh" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3" />
    <Switch>
      
        <Route exact path="/about">
        <About mode={mode}/>
        </Route>
        <Route path="/users">
            <Users mode={mode}/>
          </Route>
        <Route exact path="/">
         <TextForm heading="Enter your text here" mode={mode}/>
        </Route>
        
        


    </Switch>
  </Router>
   
  </>
  );
}

export default App;
