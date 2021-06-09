import React, { useContext, useEffect, useState } from "react" ;
import {Button , Collapse} from "react-bootstrap";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import { Changename, Changepassword, Changeprofilepic, Getprofile } from "./api";
import Profilecontext from "./Profilecontext";
export default function Profile()
{   const [profile,updateprofile] = useState();
    const [open, setOpen] = useState(false);
    const [pass,updatepass] = useState("password");
    const [name,udpatename] = useState("");
    const [profilename,updateprofilename] = useState("");
    const [img,updateimg] = useState("");
    const [password ,updatepassword] = useState("");
    const [cpassword,updatecpassword] = useState("");
    let tempname = "";
    const [message,updatemessage] = useState("");
    let common = useContext(Profilecontext);
    useEffect(async()=>{
      let id = window.localStorage.getItem("userid");
      let result = await Getprofile(id,{});
      updateprofile(result.data);
      updateimg(result.data.profilepic);
      udpatename(result.data.name);
      updateprofilename(result.data.profilename);
    },[])
    return <div class="container">
         <div class="row">
             <div class="offset-3 col-4">
                 <form onSubmit={
                   async(e)=>{
                    updatemessage("");
                    e.preventDefault();
                    let change = false; 
                    if(profile.profilepic!=img)
                    {
                        let result = await Changeprofilepic({profilepic:img});
                        if(result.data.message=="changed")
                        {
                          change = true;
                           let temp = await Getprofile(window.localStorage.getItem("userid"),{});
                           common.updateuserdata(temp.data);
                        }
                    }
                    if(cpassword==password && cpassword!=="" && password!=="")
                    {
                        let result = await Changepassword(window.localStorage.getItem("userid"),{password:password})
                        console.log(result.data);
                        if(result.data.message=="changed")
                        {
                          change = true ;
                          updatecpassword("");
                          updatepassword(""); 
                        }
                    }
                    else
                    {
                      if(cpassword!=password)
                      {
                        updatemessage("Password must be identical");
                      }
                    }
                    if(profile.name!=name)
                    {
                      let result = await Changename({name:name});
                      if(result.data.message=="changed")
                      {
                        change = true ; 
                      }
                    }
                    if(change==true)
                    {
                      if(message!="Password must be identical")
                      {
                        updatemessage("change's saved");
                      }
                    }
                   }
                 }>
                  
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Profile Picture</label> <br/>
                   <img src={img} class="profilepic"/><br/><br/>
                   <label for="exampleFormControlInput1" class="form-label">Change profilepic</label> <br/>
                   <input type="file" class="form-control" id="image" placeholder="" accept="image/*" onChange={
                       (e)=>{
                          
                        const file = e.target.files[0];

                        // encode the file using the FileReader API
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          // log to console
                          // logs data:<type>;base64,wL2dvYWwgbW9yZ...
                          updateimg(reader.result);
                          
                        };
                        reader.readAsDataURL(file);
                       }
                   }/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Profile Name</label>
                   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={profilename} disabled/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleFormControlInput1" class="form-label">Name:</label>
                   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={name} onChange={
                     (e)=>{
                       udpatename(e.target.value);
                     }
                   }/>
                 </div>
                 <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Change Password
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            <br/>
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
</div>
        </div>
      </Collapse> <br/><br/>
      <div>
     <span style={{color:"blue"}}>{message}</span><br/>
      </div><br/>
      <button type="submit" class="btn btn-primary">Save</button>
                 </form>
                 </div>
             </div>
        </div>
}

function getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg');
 }