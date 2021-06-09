import { Addfriend, GetAllfriends, Removefriend } from "./api";
import React, { useEffect, useState } from "react";
import {ListGroup} from "react-bootstrap";
import { AddCommunity, GetAllCommunity, Getprofile,RemoveCommunity} from "./api";
export default function People()
{
    let[list,changelist] = useState([]);
    let[userfriends,updateuserfriends] = useState([]);
    let[profile , updateprofile] = useState("");
    useEffect(async()=>{
     let temp = await GetAllfriends({});
     let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
     //console.log(temp1.data.community);
     updateprofile(temp1.data.profilename);
    
     updateuserfriends([...temp1.data.friends]);
     changelist([...temp.data]);
    //console.log(temp.data);
    },[])

    return <div>
        <div class="container-fluid">
            <div class="row">
                <div class="offset-3 col-6">
                <br/>
          <ListGroup>
              <div class="container-fluid">
                  <div class="row">
  <ListGroup.Item active>Friend's List</ListGroup.Item>
       {
           list.map((i)=>{
               if(i!==profile)
               {
             return <> <div class="col-11"># {i} </div><div class= "col-1"><button class="btn">{userfriends.includes(i)?<i class="fas fa-times" onClick={
                async()=>{
                   let temp =  await Removefriend({friends:i});
                    //console.log(temp.data);
                    let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                    updateuserfriends([...temp1.data.friends]);
               } 
             }></i>:<i class="fas fa-check" onClick={
                 async()=>{
                      await Addfriend({friends:i});
                      let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                      updateuserfriends([...temp1.data.friends]);
                 }
             }></i>}</button></div></>
}})}
            </div></div>
             </ListGroup>
            </div>
            </div>
            </div>
            </div>
}