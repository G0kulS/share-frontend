import React, { useEffect, useState } from "react";
import { AddPost, Getprofile } from "./api";

export default function Addpost()
{   let [profile,updateprofile]= useState();
    let [userid,updateuserid] = useState("");
    let [content,updatecontent] = useState("");
    let [img,updateimg] = useState("");
    let [community,updatecommunity] = useState("");
    let [message,updatemessage] = useState("");
    let [imgvalue,updateimgvalue] = useState("");
    useEffect(async()=>{
      updateuserid(window.localStorage.getItem("userid"));
      let temp = await Getprofile(window.localStorage.getItem("userid"),{});
      updateprofile(temp.data);
      //console.log(userid);
    },[])
    return <div class="container">
         <div class="row">
             <div class="offset-3 col-6">
                 <form onSubmit={
                     async(e)=>{
                        e.preventDefault();
                        let obj = {
                            content : content , 
                            image : img , 
                            community : community,
                            userid : userid,
                            profilename:profile.profilename,
                            likeid: [] ,
                            dislikeid : [],
                            comment : [] 
                        }
                        let res = await AddPost(obj);
                        updatemessage(res.data.message);
                        updatecontent("");
                        updatecommunity("");
                        updateimg("");
                        updateimgvalue("");
                     }
                 }>
             <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Content :</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" required value={content} onChange={
                 (e)=>{updatecontent(e.target.value)}
             }></textarea>
             </div>
             <div class="mb-3">
              <label for="formFile" class="form-label">Image :</label>
              <input class="form-control" type="file" id="formFile" accept="image/*" value={imgvalue} onChange={
                       (e)=>{
                        updateimgvalue(e.target.value);  
                        const file = e.target.files[0];

                        // encode the file using the FileReader API
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          // log to console
                          // logs data:<type>;base64,wL2dvYWwgbW9yZ...
                          updateimg(reader.result);
                          console.log(img);
                        };
                        reader.readAsDataURL(file);
                       }
                   }/>
             </div>
             <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Community</label>
             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required value={community} onChange={
                 (e)=>{updatecommunity(e.target.value)}
             }/>
            </div>
            <div>
                <span style={{color:"green"}}>{message}</span>
            </div><br/>
            <button class="btn btn-primary" type="submit">Post</button>
          </form>
             </div>
             </div>
        </div>
}