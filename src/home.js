import React, { useEffect, useState } from "react";
import { Getprofile,Getpostcommunity ,Addlike,Adddislike,Removedislike,Removelike} from "./api";
import {Link} from "react-router-dom";

export default function Home()
{  
    let [profiledata,udpateprofiledata] = useState();
    let [post,udpatepost] = useState([]);
    useEffect(async()=>{
        let temp = await Getprofile(window.localStorage.getItem("userid"),{});
        udpateprofiledata(temp.data);
        let temppost = await Getpostcommunity({community:temp.data.community});
        console.log(temppost.data);
        udpatepost(temppost.data.reverse());
        
    },[])
    return <div class="container">
        <div class="row">
            <div class="col-2">
         <Link to ="/friendspost"><button class="btn btn-primary mainpagebutton" style={{width:"10vw"}}>Friends</button></Link><br/>
         <Link to ="/home">    <button class="btn btn-primary" style={{borderRadius:"10vh",width:"10vw"}}>community</button></Link>
            </div>
            <div class="col-7">
                {
                    post.map((i)=>{
                        if(i.image!=="")
                        {
                        return <div class="card post">                      
                        <div class="card-body">
                          <h5 class="card-title" style={{color:"blue"}}>#{i.community}</h5>
                          <p class="card-text">{i.content}</p>
                          <img src={i.image} class="card-img-top postimg" alt="..."/>
                          <div >
                              {
                                  i.likeid.includes(window.localStorage.getItem("userid"))?<><span>{i.likeid.length}</span><button class="btn" onClick={
                                     async()=>{
                                          await Removelike(i._id,{likeid:window.localStorage.getItem("userid")})
                                          await Removedislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
                                          let temppost = await Getpostcommunity({community:profiledata.community});
                                          udpatepost(temppost.data.reverse());
                                      }
                                  }><i style={{color:"blue"}} class="far fa-thumbs-up fa-2x"></i></button></>:<><span>{i.likeid.length}</span><button class="btn" onClick={
                                      async()=>{
                                          await Addlike(i._id,{likeid:window.localStorage.getItem("userid")}) 
                                          await Removedislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
                                          let temppost = await Getpostcommunity({community:profiledata.community});
                                          udpatepost(temppost.data.reverse());
                                      }
                                  }><i style={{color:"gray"}} class="far fa-thumbs-up fa-2x"></i></button></>  
                              }
                              {i.dislikeid.includes(window.localStorage.getItem("userid"))?<><span>{i.dislikeid.length}</span><button class="btn" onClick={
                                  async()=>{
                                    await Removelike(i._id,{likeid:window.localStorage.getItem("userid")})
                                    await Removedislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
                                    let temppost = await Getpostcommunity({community:profiledata.community});
                                    udpatepost(temppost.data.reverse());    
                                }
                              }><i  style={{color:"blue"}} class="far fa-thumbs-down fa-2x"></i></button></>:<><span>{i.dislikeid.length}</span><button class="btn" onClick={
                                  async()=>{
                                    await Removelike(i._id,{likeid:window.localStorage.getItem("userid")})
                                    await Adddislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
                                    let temppost = await Getpostcommunity({community:profiledata.community});
                                    udpatepost(temppost.data.reverse());
                                  }
                              } ><i  style={{color:"gray"}} class="far fa-thumbs-down fa-2x"></i></button></>}
                          </div>
                        </div>
                      </div>
                    }
                     else
                    {
                       return <div class="card">
            <div class="card-body">
            <h5 class="card-title" style={{color:"blue"}}>#{i.community}</h5>
            <p class="card-text">{i.content}</p>
       {
           
            i.likeid.includes(window.localStorage.getItem("userid"))?<><span>{i.likeid.length}</span><button class="btn" onClick={
               async()=>{
                    await Removelike(i._id,{likeid:window.localStorage.getItem("userid")})
                    await Removedislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
                    let temppost = await Getpostcommunity({community:profiledata.community});
                    udpatepost(temppost.data.reverse());
                }
            }><i style={{color:"blue"}} class="far fa-thumbs-up fa-2x"></i></button></>:<><span>{i.likeid.length}</span><button class="btn" onClick={
                async()=>{
                    await Addlike(i._id,{likeid:window.localStorage.getItem("userid")}) 
                    await Removedislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
                    let temppost = await Getpostcommunity({community:profiledata.community});
                    udpatepost(temppost.data.reverse());
                }
            }><i style={{color:"gray"}} class="far fa-thumbs-up fa-2x"></i></button></>  
        }
        {i.dislikeid.includes(window.localStorage.getItem("userid"))?<><span>{i.dislikeid.length}</span><button class="btn" onClick={
            async()=>{
              await Removelike(i._id,{likeid:window.localStorage.getItem("userid")})
              await Removedislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
              let temppost = await Getpostcommunity({community:profiledata.community});
              udpatepost(temppost.data.reverse());    
          }
        }><i  style={{color:"blue"}} class="far fa-thumbs-down fa-2x"></i></button></>:<><span>{i.likeid.length}</span><button class="btn" onClick={
            async()=>{
              await Removelike(i._id,{likeid:window.localStorage.getItem("userid")})
              await Adddislike(i._id,{dislikeid:window.localStorage.getItem("userid")})
              let temppost = await Getpostcommunity({community:profiledata.community});
              udpatepost(temppost.data.reverse());
            }
        } ><i  style={{color:"gray"}} class="far fa-thumbs-down fa-2x"></i></button></>}
       
  </div>
</div>
                    }})
                }
                </div>
                <div class="col-2">
                      <button class="btn btn-primary uparrow" onClick={
              ()=>{
                window.scrollTo(0,0);
                console.log("click");
              }
            }><i class="far fa-arrow-alt-circle-up"></i></button>
                          </div>
            </div>
        </div>
}