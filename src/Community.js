import React, { useEffect, useState } from "react";
import {ListGroup} from "react-bootstrap";
import { AddCommunity, GetAllCommunity, Getprofile,RemoveCommunity} from "./api";
export default function Community()
{    
    let[list,changelist] = useState([]);
    let[usercommunity,updateusercommunity] = useState([]);
    useEffect(async()=>{
     let temp = await GetAllCommunity({});
     let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
     //console.log(temp1.data.community);
     updateusercommunity([...temp1.data.community]);
     changelist([...temp.data.sort()]);
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
  <ListGroup.Item active>Community List</ListGroup.Item>
       {
           list.map((i)=>{
             return <> <div class="col-11"># {i} </div><div class= "col-1"><button class="btn">{usercommunity.includes(i)?<i class="fas fa-times" onClick={
                async()=>{
                   let temp =  await RemoveCommunity({community:i});
                   //console.log(temp.data);
                    let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                    updateusercommunity([...temp1.data.community]);
               } 
             }></i>:<i class="fas fa-check" onClick={
                 async()=>{
                      await AddCommunity({community:i});
                      let temp1 = await Getprofile(window.localStorage.getItem("userid"),{});
                      updateusercommunity([...temp1.data.community]);
                 }
             }></i>}</button></div></>
           })}
            </div></div>
             </ListGroup>
            </div>
            </div>
            </div>
            </div>
}