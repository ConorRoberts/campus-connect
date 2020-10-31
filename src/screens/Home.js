import React, { useState,Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {useAuthState} from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import './Home.css';
import splashImage from "../assets/campus-splash.jpg";
import firestore,{auth,provider} from "../firebase";
import Picker from "../components/Picker";

function Home(props) {
  const {setClass,currentClass,setSchool,currentSchool,classes,schools}=props;
        
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
        <Picker onSubmit={()=>onSubmit(true)} className="home-picker" currentClass={currentClass} currentSchool={currentSchool} setClass={setClass} setSchool={setSchool} schools={schools} classes={classes}/>
      </main>
      <footer id="contact">
        This is contact info
      </footer>
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
