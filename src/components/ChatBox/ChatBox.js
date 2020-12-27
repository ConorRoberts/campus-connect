import React, { useEffect, useState, useRef } from "react";
import firestore, { auth } from "../../firebase";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import "./ChatBox.css";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

export default function ChatBox(props) {
  const dummy = useRef();

  // Set reference point for messages collection
  const messagesRef = firestore
    .collection("schools")
    .doc(props.currentSchool)
    .collection("classes")
    .doc(props.currentClass)
    .collection("messages");

  // Organizing message data retrieved from messagesRef
  const query = messagesRef.orderBy("timestamp");

  // Not sure what this does. Result saved in messages
  const [messages] = useCollectionData(query, { idField: "id" });

  const [questionState, setQuestionState] = useState(false);

  // Used for modifying text box value
  const [formValue, setFormValue] = useState("");

  // Function for sending message
  const sendMessage = async (e) => {
    // Prevent browser refresh on form submission
    e.preventDefault();

    const { displayName, email, photoURL } = auth.currentUser;

    if (formValue) {
      // Add message to firebase collection
      await messagesRef.add({
        text: formValue,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        sender_name: displayName,
        sender_email: email,
        photoURL,
        is_question: questionState,
      });

      // Reset form value
      setFormValue("");
    }
  };

  // Scroll last message into view on change of messages
  useEffect(() => dummy.current.scrollIntoView({ behavior: "smooth" }), [
    messages,
  ]);

  const [questionMenuState, setQuestionMenuState] = useState(false);

  return (
    <div className="ChatBox">
      <div className={questionMenuState ? "chat-window squished" : "chat-window"}>
        <p className="beginning-label">This is the beginning of the messages</p>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <ContactSupportIcon
        onClick={() => {
          setQuestionMenuState(!questionMenuState);
        }}
        className="questions-menu-button"
      />
      <div className={questionMenuState ? "questions-container opened" : "questions-container"}>
        {messages &&
          messages
            .filter((msg) => msg.is_question && msg.is_question === true)
            .map((msg) => (
              <ChatMessage key={msg.id + "-question"} message={msg} />
            ))}
      </div>
      <form className="form-container" onSubmit={sendMessage}>
        <input
          className="send-box"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Message..."
        />
        <button
          onClick={() => setQuestionState(!questionState)}
          className={`question-button ${questionState ? "on" : "off"}`}
          type="button"
        >
          <LiveHelpIcon className="question-icon" />
        </button>
        <button className="send-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
