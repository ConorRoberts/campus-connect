import React from "react";
import "firebase/firestore";
import "firebase/auth";
import "./Picker.css";

export default function Picker(props){
  const {setClass,currentClass,setSchool,currentSchool,classes,schools,onSubmit}=props;

  return(
    <form onSubmit={()=>onSubmit(true)} className={props.className}>
        <label htmlFor="input-school">School:</label>
        <select onChange={(e)=> setSchool(e.target.value)} id="input-school" name="input-school" value={currentSchool}>
          {schools && 
          schools.map((school)=><option key={school.id.split(" ").join("")} value={school.id}>{school.id}</option>)}
        </select>
        <label htmlFor="input-class">Class:</label>
        <select onChange={(e)=>setClass(e.target.value)} id="input-class" name="input-class" value={currentClass}>
          {classes && 
          classes.map((c)=><option key={c.id} value={c.id}>{c.id}</option>)}
        </select>
        <button>
          Submit
        </button>
      </form>
  )
}