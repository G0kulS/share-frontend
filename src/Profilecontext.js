import React, { useState }  from "react";

const Profilecontext = React.createContext();

export default Profilecontext;

export const ProfileDetails =   ({children}) => {
    let [userdata,updateuserdata]= useState();
    let [searchword,updatesearchword] = useState("");

   
    return <Profilecontext.Provider value = {{userdata,updateuserdata,searchword,updatesearchword}}>{children}</Profilecontext.Provider>
}