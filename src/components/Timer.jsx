import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./css/Timer.css";
export default function Timer({ duration }) {
  const [time, setTime] = useState(10);
  
  return (
    <div id="timer">
      <h1>Breath...</h1>
      <CircularProgressbar
        value={time}
        maxValue={duration}
        minValue={0}
        text={`${time}`}
      />
    </div>
  );
}
