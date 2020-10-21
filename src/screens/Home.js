import React, { useRef,useState } from "react";
import firestore from "../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData,useDocumentData } from "react-firebase-hooks/firestore";
import './Home.css';
import splashImage from "../assets/campus-splash.jpg";

function Home() {
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
          <img src={splashImage} alt="Campus splash image"/>
        </div>
        <Picker/>
      </main>
      <footer id="contact">
        This is contact info
      </footer>
    </div>
  );
}

function Picker(){
  //State for current class
  // const [currentClass,setClass] = useState("MCS1000");
  const [currentSchool,setSchool] = useState("University of Guelph");

  const schoolsQuery = firestore
  .collection("schools");
  const classesQuery = schoolsQuery
  .doc(currentSchool)
  .collection("classes");

  const [schools] = useCollectionData(schoolsQuery,{idField:"id"});
  const [classes] = useCollectionData(classesQuery, { idField: "id" });
  return(
    <div>
      <form className="home-form-container">
          <label for="input-school">School:</label>
          <select onChange={(e)=> setSchool(e.target.value)} id="input-school" name="input-school" selected="University of Guelph">
            {schools && 
            schools.map((school)=><option value={school.id}>{school.id}</option>)}
          </select>
          <label for="input-class">Class:</label>
          <select id="input-class" name="input-class">
            {classes && 
            classes.map((c)=><option value={c.id}>{c.id}</option>)}
          </select>
        </form>
    </div>
  )
}

function SchoolPicker(){
  

}

function ClassPicker(){

}

export default Home;
