import React from "react";
import "firebase/firestore";
import "firebase/auth";
import "./Picker.css";

export default function Picker(props) {
  const {
    setClass,
    // currentClass,
    // currentSchool,
    setSchool,
    classes,
    schools,
    setSelectedClass,
    setSelectedSchool,
    selectedSchool,
    selectedClass,
    onSubmit
  } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSchool(selectedSchool);
        setClass(selectedClass);
        if (onSubmit){
          onSubmit();
        }
      }}
      className={props.className}
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
      <label htmlFor="input-class">Class:</label>
      <select
        onChange={(e) => setSelectedClass(e.target.value)}
        id="input-class"
        name="input-class"
        value={selectedClass}
      >
        {classes &&
          classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.id}
            </option>
          ))}
      </select>
      <button>Submit</button>
    </form>
  );
}
