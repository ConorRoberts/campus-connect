import React from "react";
import "firebase/firestore";
import "firebase/auth";

import "./Home.css";
import splashImage from "../../assets/campus-splash.jpg";
import { auth, provider } from "../../firebase";
import Picker from "../../components/Picker/Picker";
import { useAuthState } from "react-firebase-hooks/auth";

function Home(props) {
  const {
    setClass,
    // currentClass,
    // currentSchool,
    setSchool,
    classes,
    schools,
    setCurrentScreen,
    setSelectedSchool,
    setSelectedClass,
    selectedClass,
    selectedSchool,
  } = props;

  const [user] = useAuthState(auth);

  return (
    <div className="Home">
      <header>
        <h1>Campus Connect</h1>
        <nav className="top-bar">
          <ul>
            {user && (auth.currentUser.email === "conor@conorroberts.com" || auth.currentUser.email === "sante4832@gmail.com")  && (
              <li>
                <button onClick={() => setCurrentScreen("admin")}>Admin</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <div className="splash-container">
          <img src={splashImage} alt="Campus splash" />
        </div>
        {user ? (
          <Picker
            onSubmit={() => setCurrentScreen("chat")}
            className="home-picker"
            // currentClass={currentClass}
            // currentSchool={currentSchool}
            setClass={setClass}
            setSchool={setSchool}
            schools={schools}
            classes={classes}
            selectedClass={selectedClass}
            selectedSchool={selectedSchool}
            setSelectedClass={setSelectedClass}
            setSelectedSchool={setSelectedSchool}
          />
        ) : (
          <SignIn className="google-signin" />
        )}
      </main>
      <footer className="contact-container">
        <span>
          Conor Roberts : Conor@ConorRoberts.com
          <br></br>
          Eric Santos : santeric2001@gmail.com
        </span>
      </footer>
    </div>
  );
}

function SignIn(props) {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
  return (
    <button className={props.className} onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

// function SignOut() {
//   return (
//     auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
//   );
// }

export default Home;
