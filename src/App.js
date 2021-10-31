import React,{useState,useEffect} from "react";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Login from "./Login";
import LoggedIn from "./LoggedIn";



import './App.css';



function App() {

  



  

 
  return (

    <Router>
      <div className="App">
        <Switch>
          
            <Route path="/weather">
            <LoggedIn/>
            </Route>
            <Route path="/">
            <Login/>
            </Route>


          
          </Switch>
      </div>
    
    </Router>
    
  );
}

export default App;
