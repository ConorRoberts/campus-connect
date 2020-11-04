import "./Chat.css";
import React, { useEffect, useRef,useState } from "react";
import firestore,{auth,provider} from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Picker from "../../components/Picker/Picker";
import MenuIcon from '@material-ui/icons/Menu';
import { TabScrollButton } from "@material-ui/core";

export default function Chat(props) {

  const {setClass,currentClass,setSchool,currentSchool,classes,schools}=props;

  return (
    <div className="Chat">
      <div className="top-bar">
        <Picker className="chat-picker" currentClass={currentClass} currentSchool={currentSchool} setClass={setClass} setSchool={setSchool} schools={schools} classes={classes}/>
        <div className="sidebar-container">
          <MenuIcon className="menu-icon"/>  
          <div className="side-menu">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
      <ChatBox currentClass={currentClass} currentSchool={currentSchool}/>
    </div>
  );
}

function ChatMessage(props) {
  // Retrieving text from message object (passed as prop)
  const { text,sender_name,sender_email,timestamp} = props.message;

  return (
    <div className="message">
      {
        sender_name ? <p> <strong>{sender_name}</strong>: {text}</p>
        :<p> {text}</p>
      }
      {/* <p> {text}</p>
      <p> {sender_name}: {text}</p> */}
    </div>
  );
}

function ChatBox(props) {

  const dummy = useRef();
  
  // Set reference point for messages collection
  const messagesRef = firestore
    .collection("schools")
    .doc(props.currentSchool)
    .collection("classes")
    .doc(props.currentClass)
    .collection("messages")

  // Organizing message data retrieved from messagesRef
  const query = messagesRef.orderBy("timestamp");

  // Not sure what this does. Result saved in messages
  const [messages] = useCollectionData(query, { idField: "id" });

  // Used for modifying text box value
  const [formValue, setFormValue] = useState("");

  // Function for sending message
  const sendMessage = async (e) => {
    // Prevent browser refresh on form submission
    e.preventDefault();

    const {displayName,email} = auth.currentUser;

    if (formValue){
      // Add message to firebase collection
      await messagesRef.add({
        text: formValue,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        sender_name:displayName,
        sender_email:email
      });
  
      // Reset form value
      setFormValue("");

      // Old method for scrolling to last message
      // dummy.current.scrollIntoView({behavior:"smooth"});
    }
  };

  // Scroll last message into view on change of messages
  useEffect(()=>dummy.current.scrollIntoView({behavior:"smooth"}),
  [messages]);

  return (
    <div className="chat-component">
      <div className="chat-window">
        <p className= "beginning-label">This is the beginning of the messages</p>
        {/* Checks if there are any messages
        renders out all messages, passing the firebase message ID in as the key (for react rendering)
        passes in entire message object for use within later functions */}
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <form className="form-container" onSubmit={sendMessage}>
        <input
          className="send-box"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="   Message..."
        />
        <button className="send-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}