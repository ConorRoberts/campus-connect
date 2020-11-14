import React from "react";
import "./ChatMessage.css";

export default function ChatMessage(props) {
    // Retrieving text from message object (passed as prop)
    const {
      text,
      sender_name,
      sender_email,
      // timestamp,
      photoURL,
      is_question,
    } = props.message;
  
    return (
      <div className={`ChatMessage message ${is_question ? "question" : ""}`}>
        <div>{photoURL ? <img alt="Profile icon" src={photoURL} /> : ""}</div>
        <p>
          <strong>
            {sender_name} ({sender_email})
          </strong>
          <br />
          {text}
        </p>
      </div>
    );
  }