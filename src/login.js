import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {UserLogin} from "./api";
import {Link} from "react-router-dom";


export default function Login()
{   
    let history = useHistory();
    let [type,updatetype] = useState("password");
    let [email,updateemail] = useState("");
    let [pass,udpatepass] = useState("");
    let [message,updatemessage] = useState("");
    useEffect(()=>{
      if (window.localStorage.getItem("userid") !== null) {
       // console.log(window.localStorage.getItem("userid"));
        history.push("/home");
      }
      else
      {
        console.log("stay on")
      }
    },[])
    return <div class="loginbackground">
           <div class="container-fluid">
           <div class="row">
           <div class ="offset-4 col-4">
            <form class="login" onSubmit={
              async(e)=>{
                e.preventDefault();
                let obj = {
                  email : email,
                  password : pass
                }
                let res = await UserLogin(obj);
                if(res.data.message==="Allowed")
                {
                  window.localStorage.setItem("token",res.data.token);
                  window.localStorage.setItem("userid",res.data.userid);
                  updateemail("");
                  udpatepass("");
                  history.push("/home");
                }
                else
                {
                  updatemessage(res.data.message);
                }
              }
            }>
           <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Email address</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required value={email} onChange={
             (e)=>{updateemail(e.target.value)}
           }/>
          </div>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input type={type} class="form-control" id="exampleFormControlInput1" placeholder="" required minLength="8" value={pass} onChange={
             (e)=>{udpatepass(e.target.value)}
          }/>
           </div>
           <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>{
          if(type=="password")
        {
           updatetype("text");
         }
           else
            {
          updatetype("password");
            }
  }}/>
  <label class="form-check-label" for="flexCheckDefault">
    Show password
  </label>
      </div>
      <div>
       <span>{message}</span>
      </div>
      <br/>
     <div class="mb-3">
     <button style={{marginRight:"5vw"}} class="btn btn-primary" type="submit">Login</button> <button class="btn btn-primary" type="button" onClick={
       ()=>{history.push("/")}
     }>Home page</button>
      </div>
      <div class="mb-3">
     <Link to="/forgotpassword"> Forgot password</Link>
      </div>
      </form>
        </div>
          </div>
        </div></div>
}