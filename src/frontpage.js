import React, { useEffect } from "react";
import Background from "./img/EK0L1muXUAE2cLd.jpg";
import {Link, useHistory} from "react-router-dom";
export default function Frontpage()
{   
    let history = useHistory();
    useEffect(()=>{
        if (window.localStorage.getItem("userid") !== null) {
          history.push("/home");
        }
      },[])
    return <div style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "green",
        fontSize:"3vh",
    }} >
          <div class="container-fluid">
              <div class="row">
                  <div class="offset-4 col-4">
                      <div class="frontpage">
                    <Link to="/login"><button class="btn btn-success">Login</button></Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/register"> <button class="btn btn-success">Register</button></Link>
                      </div>
                      </div>
                  </div>
              </div>
           </div>
}