import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./Picker.css";

export default function Picker(props){
  const {setClass,currentClass,setSchool,currentSchool,classes,schools}=props;

  return(
    <div>
      <form className={props.className}>
          <label htmlFor="input-school">School:</label>
          <select onChange={(e)=> setSchool(e.target.value)} id="input-school" name="input-school" value={currentSchool}>
            {schools && 
            schools.map((school)=><option value={school.id}>{school.id}</option>)}
          </select>
          <label htmlFor="input-class">Class:</label>
          <select onChange={(e)=>setClass(e.target.value)} id="input-class" name="input-class" value={currentClass}>
            {classes && 
            classes.map((c)=><option value={c.id}>{c.id}</option>)}
          </select>
        </form>
    </div>
  )
}