import React from "react";
import {useState} from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";
import LoggedIn from "./LoggedIn";



function Login(){

    const[username,setUser]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory();
    

    const SignIn=(e)=>{
        e.preventDefault();
        if(username!=="" && password!==""){
            
            history.push("/weather");

        }
        else{
            window.alert("Fill The Credentials");
        }
        

    }




    return<>
    <div className="login">
            

            <div className="login_container">
                <h1>Weather App</h1>
                <form>
                    <h3>UserName</h3>
                    <input type="text" value={username} onChange={(event)=>(setUser(event.target.value))}/>
                    <h3>Password</h3>
                    <input type="password" value={password} onChange={(event)=>(setPassword(event.target.value))}/>

                    <button type="submit" className="signin_button" onClick={SignIn} >Sign In</button>
                </form>
                
            </div>


        </div>
    
    </>
}

export default Login;

