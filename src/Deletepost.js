import react, { useEffect, useState } from "react";
import { Getpost,Deletepostbyid} from "./api";

export default function Deletepost()
{
    
    let [post,updatepost] = useState([]);
    useEffect(async()=>{
       let list = await Getpost(window.localStorage.getItem("userid"));
       updatepost([...list.data])
    },[])
    return <div class="container-fluid">
        <div class="row">
            <div class="offset-1 col-10">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Community</th>
      <th scope="col">content</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {post.map((i)=>{
      return <tr>
      <td>{i.community}</td>
      <td>{i.content.substring(0,50)}...</td>
      <td><button class="btn btn-warning" onClick={
          async()=>{
             let result =  await Deletepostbyid(i._id);
             console.log(result.data);
             let temp = await Getpost(window.localStorage.getItem("userid"));
             updatepost([...temp.data])
          }
      }>Delete</button></td>
    </tr>      
                    })}
  </tbody>
</table>
                
                </div>
            </div>
    </div>
}