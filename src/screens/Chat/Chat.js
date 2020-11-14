import "./Chat.css";
import React from "react";
import "firebase/firestore";
import "firebase/auth";
import Picker from "../../components/Picker/Picker";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import ChatBox from "../../components/ChatBox/ChatBox";

export default function Chat(props) {
  const {
    setClass,
    currentClass,
    setSchool,
    currentSchool,
    classes,
    schools,
    setSelectedSchool,
    setSelectedClass,
    selectedClass,
    selectedSchool,
    setCurrentScreen
  } = props;

  return (
    <div className="Chat">
      <div className="top-bar">
        <div className="sidebar-container">
          <MenuIcon className="menu-icon" />
          <div className="side-menu">
            <Picker
              className="chat-picker"
              setClass={setClass}
              setSchool={setSchool}
              schools={schools}
              classes={classes}
              selectedClass={selectedClass}
              selectedSchool={selectedSchool}
              setSelectedClass={setSelectedClass}
              setSelectedSchool={setSelectedSchool}
            />
          </div>
        </div>
        <div className="question-sidebar-container">
          
        </div>
        <div className="class-label-container">
          <span>{currentClass}</span>
        </div>
        <HomeIcon onClick={()=>setCurrentScreen("home")}className="home-icon"/>
      </div>
      <ChatBox currentClass={currentClass} currentSchool={currentSchool} />
    </div>
  );
}
