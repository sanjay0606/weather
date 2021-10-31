import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import "./LoggedIn.css";
import Wdata from "./WData";






function LoggedIn(){

    

    const list=["Delhi","Mumbai","Bareilly","Pune","Gurugram","Agra","Goa","Kolkata","Mohali","Jaipur"]
    const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const[value,setValue]=useState([]);
    const[toggle,setToogle]=useState(false);
    const[city,setCity]=useState("Goa");
    const history=useHistory();


    const APIKEY="ed7829c6b63ddd9db1088bd92ed6bfe7";

     useEffect(()=>{
         const num=0;
        const getWeather=async()=>{
            
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKEY}`)
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data.list[0].weather["0"].description);
            const days=data.list.map((day,index)=>({
                date:new Date(day.dt_txt).getDay(),
                humidity:day.main.humidity,
                maxtemp:day.main.temp_max,
                mintemp:day.main.temp_min,
                desc:day.weather["0"].description




            }))
            var temp=[]
            for(let j=0;j<days.length;j=j+8){
                temp.push(days[j]);
            }
            setValue(temp);
        })
        
       
        
        console.log(value.length);
        }
        console.log(value)
        
        
        
        getWeather();
     },[city])

     const change=()=>{
         setToogle(!toggle);
         

     }
     const logout=()=>{
         
         history.push("/");
     }


     const onCityChange=(e)=>(
         setCity(e.target.value)
     )
    
    const birth=new Date("2021-10-30 18:00:00")
    const day1=birth.getDay();
    
    const divstyle={
        visibility:toggle? "visible":"hidden",
    }
    



    return<>
    
    <div className="weather-app">
        <div className="header">
        <label htmlFor="select-city">Select City:-</label>

        <select name="city" id="select-city" onChange={onCityChange}>
            
            {list.map((index)=>(<option value={index}>{index}</option>))}
            
        </select>

        </div>
        <div className="middle">
            <div className="middle-left">
                <p class="header_p">Current Weather Data</p>
                {(value.length==0)? <Wdata day={0} humidity={0} maxtemp={0} mintemp={0} desc={0}/>
                :<Wdata day={weekdays[value[0].date]}
                        humidity={value[0].humidity}
                        maxtemp={value[0].maxtemp}
                        mintemp={value[0].mintemp}
                        desc={value[0].desc} />}
                

            </div>
            <div className="middle-right">
                <p class="header_p">5 Day Weather Forecast</p>
                <div className="middle-right-info">
                {(value.length==0)? <Wdata day={0} humidity={0} maxtemp={0} mintemp={0} desc={0}/>
                :value.map((info)=>(
                    <Wdata day={weekdays[info.date]}
                        humidity={info.humidity}
                        maxtemp={info.maxtemp}
                        mintemp={info.mintemp}
                        desc={info.desc}/>
                ))}

                </div>
                
                         
                
                
            
            
            </div>
        </div>
        <div className="bottom">
            <button class="toggle" onClick={change}>About Us</button>
            <button class="toggle" onClick={logout}>Log Out</button>
        </div>
        
    </div>
    <div  style={divstyle} className="sidebar">
        <p className="bottom_header">About Us Information.</p>
        <p className="bottom_p">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
    </>
}

export default LoggedIn;
