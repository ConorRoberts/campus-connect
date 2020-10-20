import "./Chat.css";
import React, { useState } from 'react';
import firestore from "../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function Chat(){
    return(
        <div>
            <ChatBox/>
        </div>
    );
}

function ChatMessage(props){
    const {text} = props.message;
    return(
        <div>
            <p>{text}</p>
        </div>
    );
}

function ChatBox(){
    // Set reference point for messages collection
    const messagesRef = firestore
    .collection("classes")
    .doc("MCS1000")
    .collection("messages");

    // Organizing message data retrieved from messagesRef
    const query = messagesRef.orderBy("timestamp").limit(25);
  
    // Not sure what this does. Result saved in messages
    const [messages] = useCollectionData(query, {idField:"id"});
  
    // Used for modifying text box value
    const [formValue,setFormValue] = useState("");
  
    // Function for sending message
    const sendMessage = async(e) =>{
        // Prevent browser refresh on form submission
        e.preventDefault();
  
        // Add message to firebase collection
        await messagesRef.add({
        text:formValue,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        
        // Reset form value
        setFormValue("");
    }
    
    return(
      <>
        <div>
          {messages && messages.map(msg=> <ChatMessage key={msg.id} message={msg}/>)}
        </div>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
          <button type="submit">Send</button>
        </form>
      </>
    )
}

function MessageBox(){

}