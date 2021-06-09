import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {Getprofile, Searchcommunity,RemoveCommunity,AddCommunity, Searchfriends,Removefriend,Addfriend} from "./api";
import Profilecontext from "./Profilecontext";
import {ListGroup} from "react-bootstrap";

export default function Search()
{   
    let {id} = useParams();
    let [result,updateresult] = useState([]);
    let [f,up] = useState([]);
    let common = useContext(Profilecontext);
    useEffect( ()=>{
        let searchword = common.searchword.split(" ");
        let temp = [];
        let temp1 = [];
        searchword.map(async(i)=>{
         if(i!="")
        {
          console.log(i);  
          let x = await Searchcommunity(i);
          x = x.data;
          temp.push(x);
          let y = await Searchfriends(i);
          y = y.data;
          temp1.push(y);
          console.log("x",x);
          console.log("temp",temp);
          }
          up([...temp1]);
          updateresult([...temp]);
        })
        
        console.log("result",result);
    },[common.searchword])

    
    useEffect(async()=>{
        let temp = await Getprofile(window.localStorage.getItem("userid"),{})
        common.updateuserdata(temp.data);
    },[])
    return <div>
       <div class="container">
       <div class="row">
        <div class="offset-2 col-7">
        <ListGroup>
             <div class="container">
                 <div class="row">                   
  <ListGroup.Item active>Community</ListGroup.Item>
       {   
           result.length ==0 ?<div class="offset-6 col-6">-</div>:result.map((i)=>{
               if(i.length!=0)
               {
             return <> <div class="col-11"># {i[0].community} </div><div class= "col-1"><button class="btn">{common.userdata.community.includes(i[0].community)?<i class="fas fa-times" onClick={
                async()=>{
                   let temp =  await RemoveCommunity({community:i[0].community});
                   //console.log(temp.data);
                    let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                    common.updateuserdata(temp1.data);
               } 
             }></i>:<i class="fas fa-check" onClick={
                 async()=>{
                      await AddCommunity({community:i[0].community});
                      let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                      common.updateuserdata(temp1.data);
                 }
             }></i>}</button></div></>}
             else
             {
                 return <div class="offset-6 col-6">-</div>
             }
           })}
             </div></div>
             </ListGroup>
             <br/>
             <br/>
             <ListGroup>
             <div class="container">
                 <div class="row">                   
  <ListGroup.Item active>People</ListGroup.Item>
       {   
           f.length ==0 ?<div class="offset-6 col-6">-</div>:f.map((i)=>{
               if(i.length!=0 && i[0].profilename!=common.userdata.profilename)
               {
             return <> <div class="col-11"># {i[0].profilename} </div><div class= "col-1"><button class="btn">{common.userdata.friends.includes(i[0].profilename)?<i class="fas fa-times" onClick={
                async()=>{
                    let temp =  await Removefriend({friends:i[0].profilename});
                   //console.log(temp.data);
                    let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                    common.updateuserdata(temp1.data);
               } 
             }></i>:<i class="fas fa-check" onClick={
                 async()=>{
                    let temp =  await Addfriend({friends:i[0].profilename});
                      let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                      common.updateuserdata(temp1.data);
                 }
             }></i>}</button></div></>}
             else
             {
                 return <div class="offset-6 col-6">-</div>
             }
           })}
             </div></div>
             </ListGroup>
             </div>
             </div></div>
    </div>
    
}