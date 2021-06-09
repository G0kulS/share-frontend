import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Changepassword } from "./api";

export default function Resetpassword()
{   
    let {id} = useParams();
    let history = useHistory();
    let [password,updatepassword] = useState("");
    let [cpassword,updatecpassword] = useState("");
    let [pass,updatepass] = useState("password");
    let [message,updatemessage] = useState("");
    return <div class="loginbackground">
        <div class="container">
            <div class="row">
                <div class="offset-4 col-4">
                    <form style={{marginTop:"20vh"}} onSubmit={
                        async(e)=>{
                           e.preventDefault();
                           if(password==cpassword)
                           {
                              let result = await Changepassword(id,{password:password})
                              updatemessage(result.data.message);
                              updatecpassword("");
                              updatepassword("");
                           }
                           else
                           {
                               updatemessage("Password must be identical")
                           }
                        }
                    }>
                <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">New Password</label>
                   <input type={pass} class="form-control" id="exampleFormControlInput1" placeholder="" minLength="8" value={password} onChange={
                     (e)=>{
                       updatepassword(e.target.value);
                     }
                   }/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Confirm new Password</label>
                   <input type={pass} class="form-control" id="exampleFormControlInput1" placeholder="" minLength="8" value={cpassword} onChange={
                     (e)=>{
                       updatecpassword(e.target.value);
                     }
                   } />
                 </div>
                 <div class="form-check">
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={
                     ()=>{
                         if(pass=="password")
                         {
                         updatepass('text');}
                         else
                         {
                             updatepass("password");
                         }
                     }
                 }/>
                <label class="form-check-label" for="flexCheckDefault">
                    show password
                    </label>
                    <div style={{color:"blue"}}>
                        {message}
                        </div><br/>
                    </div>
                    <button type="submit" class="btn btn-primary" style={{marginRight:"5vw"}}>Save</button> <button type="button" class="btn btn-primary" onClick={
                        ()=>{history.push("/")}
                    }>Home</button>
                    </form>
                </div>
            </div>
    </div> 
    </div> 
}