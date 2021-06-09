import axios from "axios";

export function UserRegister(data)
{
    return axios.post("https://share-server-node.herokuapp.com/register",data);
}
export function UserLogin(data)
{
    return axios.post("https://share-server-node.herokuapp.com/login",data);
}
export function Sendemail(data)
{
    return axios.post("https://share-server-node.herokuapp.com/email",data);
}
export function AddPost(data)
{
    
    return axios.post(`https://share-server-node.herokuapp.com/addpost`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Getprofile(id,data)
{
    
    return axios.post(`https://share-server-node.herokuapp.com/getprofile/${id}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Getfriendspost(data)
{
    
    return axios.post(`https://share-server-node.herokuapp.com/getfriendsp`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Getpostcommunity(data)
{
    
    return axios.post(`https://share-server-node.herokuapp.com/getpostc`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function GetAllCommunity()
{
    
    return axios.get(`https://share-server-node.herokuapp.com/allcommunity`,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Getpost(id)
{
    
    return axios.get(`https://share-server-node.herokuapp.com/getpost/${id}`,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Addlike(id,data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/addlike/${id}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Removelike(id,data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/removelike/${id}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Adddislike(id,data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/adddislike/${id}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Removedislike(id,data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/removedislike/${id}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function AddCommunity(data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/addcommunity/${window.localStorage.getItem("userid")}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function RemoveCommunity(data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/removecommunity/${window.localStorage.getItem("userid")}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function GetAllfriends()
{
    
    return axios.get(`https://share-server-node.herokuapp.com/allfriend`,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Searchcommunity(id)
{
    
    return axios.get(`https://share-server-node.herokuapp.com/getpostcommunity/${id}`,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Searchfriends(id)
{
    
    return axios.get(`https://share-server-node.herokuapp.com/getpostfriends/${id}`,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Addfriend(data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/addfriend/${window.localStorage.getItem("userid")}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Removefriend(data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/removefriend/${window.localStorage.getItem("userid")}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Changeprofilepic(data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/changeprofilepic/${window.localStorage.getItem("userid")}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Changename(data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/changename/${window.localStorage.getItem("userid")}`,data,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}
export function Changepassword(id,data)
{
    
    return axios.put(`https://share-server-node.herokuapp.com/changepassword/${id}`,data);
}
export function Deletepostbyid(id)
{
    
    return axios.delete(`https://share-server-node.herokuapp.com/deletepost/${id}`,{
        headers:{ authorization:window.localStorage.getItem("token")}
    })
}