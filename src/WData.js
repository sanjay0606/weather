import React from "react";
import "./WData.css"


function Wdata({day,humidity,maxtemp,mintemp,desc}){


    return <>
    <div className="container_">
        <p className="para head">Day:-{day}</p>
        <p className="para">Humidity:-{humidity} %</p>
        <p className="para">Max-temp:-{maxtemp} °C</p>
        <p className="para">Min-temp:-{mintemp} °C</p>
        <p className="para">Desc:-{desc}</p>

    </div>
    </>
}


export default Wdata;