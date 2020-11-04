import React from "react";
import "./Admin.css";

export default function Admin(props){
    const {setCurrentScreen} = props;
    return(
        <div>
            <button onClick={()=>setCurrentScreen("home")}>Home</button>
            Hello this is the admin page
        </div>
    );
}