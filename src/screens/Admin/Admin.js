import React, { useState } from "react";
import "./Admin.css";
import firestore from "../../firebase";
import firebase from "firebase";

export default function Admin(props) {
  const { setCurrentScreen, schools } = props;
  const [formValue, setFormValue] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("University of Guelph");

  async function addClass(e, schoolName, className) {
    e.preventDefault();
    const databaseRef = firestore
      .collection("schools")
      .doc(schoolName)
      .collection("classes")
      .doc(className);

    databaseRef.set({
      id: className,
    });

    const messagesRef = databaseRef.collection("messages");

    await messagesRef.add({
      text: "First message",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      sender_name: "Admin",
      sender_email: "admin",
    });

    console.log(`Added class to ${schoolName} > ${className}.`);
    setFormValue("");
  }
  return (
    <div className="Admin">
      <button className="home-button" onClick={() => setCurrentScreen("home")}>Home</button>
      <form
        className="admin-form"
        onSubmit={(e) => addClass(e, selectedSchool, formValue)}
      >
        <label htmlFor="input-school">School:</label>
        <select
          onChange={(e) => setSelectedSchool(e.target.value)}
          id="input-school"
          name="input-school"
          value={selectedSchool}
        >
          {schools &&
            schools.map((school) => (
              <option key={school.id.split(" ").join("")} value={school.id}>
                {school.id}
              </option>
            ))}
        </select>
        <input
          value={formValue}
          placeholder="Class name..."
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button>Add Class</button>
      </form>
    </div>
  );
}
