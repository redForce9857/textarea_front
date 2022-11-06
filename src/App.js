import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import RickRoll from "./button";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

   function changeTime(e) {
     setTimeRemaining(e.target.value);
   }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(timeRemaining);
    setText("");
    setWordCount(0)
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type? Test yourself here 💪</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <div>
        <label for="time"> Set time in Seconds:</label>
        <input
          id="time"
          type="number"
          onChange={changeTime}
          value={timeRemaining}
          disabled={isTimeRunning}
        />
      </div>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <RickRoll/>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
