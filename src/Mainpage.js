import React, { useContext, useEffect, useState }  from "react" ;
import { Button ,Dropdown,DropdownButton } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import Profile from "./profile"; 
import Addpost from "./Addpost";   
import Community from "./Community";
import People from "./people";
import Home from "./home";
import Peoplepost from "./peoplepost";
import { Getprofile } from "./api";
import Deletepost from "./Deletepost";
import Search from "./Search";
import Profilecontext, { ProfileDetails } from "./Profilecontext";

export default function Mainpage()
{ 
    let history = useHistory();
    let [search,updatesearch] = useState("");
    let common = useContext(Profilecontext);
    useEffect(async()=>{
     let temp =await Getprofile(window.localStorage.getItem("userid"),{});
     common.updateuserdata(temp.data);
     

    },[])
    function profile()
    {
        history.push("/profile");
    }
    return <>
    <Router> 
        <div class="container-fluid">
            <div class="row">
            <div class="col-1  bg-primary">
                <span class="logout"><Link to ="/home"><button class="btn btn-primary"><i class="fas fa-home fa-2x"></i></button></Link></span>
               </div>
               <div class="col-1  bg-primary">
                <img src={common.userdata==undefined?"":common.userdata.profilepic} class="headerimg imgalign"/>
               </div>
            <div class="col-1  bg-primary">
            <span class="logout">  
            <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
  <i class="fas fa-bars fa-2x"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item ><Link to ="/profile"><span>Profile</span></Link></Dropdown.Item>
    <Dropdown.Item ><Link to ="/addpost">Add post</Link></Dropdown.Item>
    <Dropdown.Item ><Link to ="/deletepost">Delete post</Link></Dropdown.Item>
    <Dropdown.Item ><Link to ="/community">community</Link></Dropdown.Item>
    <Dropdown.Item ><Link to = "/people">People</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></span>
               </div>
               
            <div class="col-8 bg-primary">
                <div class="container-fluid row offset-2 col-6 searchbar">
              
                <div class="input-group mb-3 ">
                <input type="text" class="form-control" placeholder="Search community and friends" aria-label="Username" aria-describedby="basic-addon1" value={search} onChange={
                  (e)=>{
                    updatesearch(e.target.value);
                  }
                }/>
               <span class="input-group-text" id="basic-addon1"><Link to={`/search/${search}`}><button class="btn btn-primary" type="button" onClick={
                 ()=>{
                   common.updatesearchword(search);
                 }
               }>Search</button></Link></span>
                </div>
                
                </div>
                </div>
                <div class="col-1  bg-primary">
                <span class="logout">  <button class="btn btn-warning" style={{borderRadius:"10vw"}} onClick={
                ()=>{    window.localStorage.removeItem("token");
                         window.localStorage.removeItem("userid");
                         history.push("/login");
                }
                }>Logout</button></span>
               </div>
                </div>
                </div>
                <div class="container-fluid">
                <div class="row space">
                   
                <Switch>
                <Route path = "/profile" exact="true">
                 <Profile></Profile>
                 </Route>
                 <Route path = "/home" exact="true">
                 <Home></Home>
                 </Route>
                 <Route path = "/friendspost" exact="true">
                 <Peoplepost></Peoplepost>
                 </Route>
                 <Route path = "/addpost" exact="true">
                 <Addpost></Addpost>
                 </Route>
                 <Route path = "/community" exact="true">
                 <Community></Community>
                 </Route>
                 <Route path = "/deletepost" exact="true">
                 <Deletepost></Deletepost>
                 </Route>
                 <Route path = "/search/:id" exact="true">
                 <Search></Search>
                 </Route>
                 <Route path = "/people" exact="true">
                 <People></People>
                 </Route>
                 </Switch>
                 
                    </div>
            </div>

        </Router></>
}