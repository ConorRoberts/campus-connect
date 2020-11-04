import React, { useState } from "react";
import Home from "./screens/Home/Home";
import Chat from "./screens/Chat/Chat";
import Admin from "./screens/Admin/Admin";

import { useCollectionData } from "react-firebase-hooks/firestore";
import firestore, { auth, provider } from "./firebase";

export default function App(props) {
  //State for current class
  const [currentSchool, setSchool] = useState("University of Guelph");
  const [currentClass, setClass] = useState("MCS1000");

  const schoolsQuery = firestore.collection("schools");
  const classesQuery = schoolsQuery.doc(currentSchool).collection("classes");

  const [schools] = useCollectionData(schoolsQuery, { idField: "id" });
  const [classes] = useCollectionData(classesQuery, { idField: "id" });

  const [currentScreen, setCurrentScreen] = useState("home");

  if (currentScreen === "chat") {
    return (
      <div>
        <Chat
          currentClass={currentClass}
          currentSchool={currentSchool}
          setClass={setClass}
          setSchool={setSchool}
          schools={schools}
          classes={classes}
          schoolsQuery={schoolsQuery}
          classesQuery={classesQuery}
          setCurrentScreen={setCurrentScreen}
          />
      </div>
    );
} else if (currentScreen === "home") {
    return (
      <div>
        <Home
          setCurrentScreen={setCurrentScreen}
          currentClass={currentClass}
          currentSchool={currentSchool}
          setClass={setClass}
          setSchool={setSchool}
          schools={schools}
          classes={classes}
          schoolsQuery={schoolsQuery}
          classesQuery={classesQuery}
        />
      </div>
    );
  }else if(currentScreen==="admin"){
    return(

      <Admin setCurrentScreen={setCurrentScreen}/>
    );
  }
}
