import React, { useState,Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {useAuthState} from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import './Home.css';
import splashImage from "../assets/campus-splash.jpg";
import firestore,{auth,provider} from "../firebase";

function Home(props) {
  const {onSubmit} = props;
  return (
    <div className="Home">
      <header>
        <h1>App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="splash-container">
          <h1>Hello There</h1>
          <img src={splashImage} alt="Campus splash"/>
        </div>
        <Picker onSubmit={()=>onSubmit(true)}/>
      </main>
      <footer id="contact">
        This is contact info
      </footer>
    </div>
  );
}

function Picker(props){
  //State for current class
  const [currentClass,setClass] = useState("None");
  const [currentSchool,setSchool] = useState("Queen's University");

  const schoolsQuery = firestore
  .collection("schools");
  const classesQuery = schoolsQuery
  .doc(currentSchool)
  .collection("classes");

  const [schools] = useCollectionData(schoolsQuery,{idField:"id"});
  const [classes] = useCollectionData(classesQuery, { idField: "id" });
  return(
    <div>
      <form onSubmit={e=>props.onSubmit(e,currentClass,currentSchool)} className="home-form-container">
          <SchoolPicker onChange={(e)=>setSchool(e.target.value)} schools={schools}/>
          <ClassPicker onChange={(e)=>setClass(e.target.value)} classes={classes}/>
          <button>
            Submit
          </button>
        </form>
    </div>
  )
}

function SchoolPicker({onChange,schools}){
  return(
    <div className="home-form-module">
      <label htmlFor="input-school">School:</label>
      <select onChange={onChange} id="input-school" name="input-school" selected="University of Guelph">
        {schools && 
        schools.map((school)=><option key={school.id} value={school.id}>{school.id}</option>)}
      </select>
    </div>
  );
}

function ClassPicker({onChange,classes}){
  return(
    <div className="home-form-module">
      <label htmlFor="input-class">Class:</label>
      <select onChange={onChange} id="input-class" name="input-class" selected="None">
        {classes && 
        classes.map((c)=><option key={c.id} value={c.id}>{c.id}</option>)}
      </select>
    </div>
  );
}


function SignIn(){
  const signInWithGoogle = () =>{
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}

export default Home;
