import React, { useState } from "react";
import {Sendemail} from "./api";

export default function Forgetpassword()
{ 
    let [email,updateemail] = useState("");
    let [message,updatemessage] = useState("");
    let [color,updatecolor] = useState("red");
    return <div class="loginbackground">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-4 col-5">
                    <form style={{marginTop:"35vh"}} onSubmit={
                        async(e)=>{
                            e.preventDefault();
                            let result = await Sendemail({email:email});
                            updatemessage(result.data.message);
                            if(result.data.sent==false)
                            {
                                updatecolor("red")
                            }
                            if(result.data.sent==true)
                            {
                                updatecolor("green")
                            }
                            console.log(result.data);
                        }
                    }>
                    <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Email address</label>
           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required value={email} onChange={
             (e)=>{updateemail(e.target.value)}
           }/>
          </div>
          <div ><span style={{color:color}}>
              {message}</span>
              </div><br/>
          <button type ="submit" class="btn btn-primary">Sent mail</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
}