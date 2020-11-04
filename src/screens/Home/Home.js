import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import './Home.css';
import splashImage from "../../assets/campus-splash.jpg";
import firestore,{auth,provider} from "../../firebase";
import Picker from "../../components/Picker/Picker";
import {useAuthState} from "react-firebase-hooks/auth";

function Home(props) {
  const {setClass,currentClass,setSchool,currentSchool,classes,schools,setCurrentScreen,onSubmit}=props;
  const [user] = useAuthState(auth);

  return (
    <div className="Home">
      <header>
        <h1>App</h1>
        <nav>
          <ul>
            <li>
              <button>Admin</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="splash-container">
          <h1>Campus Connect</h1>
          <img src={splashImage} alt="Campus splash"/>
        </div>
        {user ? <Picker onSubmit={()=>setCurrentScreen("chat")} className="home-picker" currentClass={currentClass} currentSchool={currentSchool} setClass={setClass} setSchool={setSchool} schools={schools} classes={classes}/> : <SignIn className="google-signin"/>}
      </main>
      <footer className="contact-container">
        <span>
          Conor Roberts : Conor@ConorRoberts.com
          <br></br>
          Eric Santos : santeric@gmail.com
        </span>
      </footer>
    </div>
  );
}

function SignIn(props){
  const signInWithGoogle = () =>{
    auth.signInWithPopup(provider);
  }
  return(
    <button className={props.className} onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}

export default Home;
