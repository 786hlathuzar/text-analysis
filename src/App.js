import React, { useState } from "react";
import TextInput from "./components/TextInput";
import AnalysisResults from "./components/AnalysisResults";
import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [process, setProcess] = useState(false);//for avaiable text or not in textarea
  const [error, setError] = useState(false)//for error
  const [isActive, setIsActive] = useState(false);//for button

  const onChange = () => {
    setProcess(!!text);
    setError(!text);
  };
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);
  return (
    <>
      <div className="container">
        <TextInput text={text} setText={setText} />
        {error && <p style={{ color: "red", fontWeight: "bold" }}>Input text cannot be empty</p>}
        <button type="submit" id="process_btn" onClick={() => onChange()} onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            backgroundColor: isActive ? "#555" : "black",
            transform: isActive ? "scale(0.98)" : "none",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            textTransform: "uppercase",
          }}>Process Text</button>
        {process && <AnalysisResults text={text} />}
      </div>
    </>
  );
}

export default App;
