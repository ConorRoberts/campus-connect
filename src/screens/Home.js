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
        <h1 className= "header-text">Campus Connect</h1>
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
        <button className= "go-button">Go!</button>
      </main>
      <footer className="footer" id="contact">
        <h1 className= "footer-text">Contact Info:</h1>
        <h1 className= "footer-text">Eric Santos: Email - santeric2001@gmail.com Phone - 5192404685</h1>
        <h1 className= "footer-text">Conor Roberts: Email: conorIsGay@Gayboys.com  Phone - 4204206969</h1>
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
