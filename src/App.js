import React, { useState } from "react";
import Home from "./screens/Home/Home";
import Chat from "./screens/Chat/Chat";
import Admin from "./screens/Admin/Admin";

import { useCollectionData } from "react-firebase-hooks/firestore";
import firestore from "./firebase";

export default function App(props) {
  //State for current class
  const [currentSchool, setSchool] = useState("University of Guelph");
  const [currentClass, setClass] = useState("MCS1000");
  const [selectedSchool, setSelectedSchool] = useState(currentSchool);
  const [selectedClass, setSelectedClass] = useState(currentClass);

  const schoolsQuery = firestore.collection("schools");
  const classesQuery = schoolsQuery.doc(selectedSchool).collection("classes");

  const [schools] = useCollectionData(schoolsQuery, { idField: "id" });
  const [classes] = useCollectionData(classesQuery, { idField: "id" });

  const [currentScreen, setCurrentScreen] = useState("home");

  if (currentScreen === "chat") {
    return (
      <Chat
        currentClass={currentClass}
        currentSchool={currentSchool}
        selectedClass={selectedClass}
        selectedSchool={selectedSchool}
        setClass={setClass}
        setSchool={setSchool}
        schools={schools}
        classes={classes}
        schoolsQuery={schoolsQuery}
        classesQuery={classesQuery}
        setCurrentScreen={setCurrentScreen}
        setSelectedClass={setSelectedClass}
        setSelectedSchool={setSelectedSchool}
      />
    );
  } else if (currentScreen === "home") {
    return (
      <Home
        setCurrentScreen={setCurrentScreen}
        currentClass={currentClass}
        currentSchool={currentSchool}
        selectedClass={selectedClass}
        selectedSchool={selectedSchool}
        setSelectedClass={setSelectedClass}
        setSelectedSchool={setSelectedSchool}
        setClass={setClass}
        setSchool={setSchool}
        schools={schools}
        classes={classes}
        schoolsQuery={schoolsQuery}
        classesQuery={classesQuery}
      />
    );
  } else if (currentScreen === "admin") {
    return <Admin 
    setCurrentScreen={setCurrentScreen}
    schools={schools} 
    />;
  }
}
