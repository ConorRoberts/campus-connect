import React,{useEffect, useState} from "react";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {useAuthState} from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firestore,{auth,provider} from "./firebase";

export default function App(props){

    //State for current class
    const [currentSchool,setSchool] = useState("University of Guelph");
    const [currentClass,setClass] = useState("MCS1000");
    
    const schoolsQuery = firestore
    .collection("schools");
    const classesQuery = schoolsQuery
    .doc(currentSchool)
    .collection("classes");
    
    const [schools] = useCollectionData(schoolsQuery,{idField:"id"});
    const [classes] = useCollectionData(classesQuery, { idField: "id" });

    const [formSubmitted,setFormSubmitted]=useState(false);

    if (formSubmitted){
        return (
            <div>
                <Chat currentClass={currentClass} currentSchool={currentSchool} setClass={setClass} setSchool={setSchool} schools={schools} classes={classes} schoolsQuery={schoolsQuery} classesQuery={classesQuery}/>
            </div>
        );
    }else{
        return(
            <div>
                <Home onSubmit={setFormSubmitted}/>
            </div>
        );
    }

}