import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./css/Timer.css";
export default function Timer({ duration }) {
  const [time, setTime] = useState(duration);
  const [audio] = useState(new Audio("/sounds/timermusic.mp3"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
      if (time <= 0) {
        clearInterval(interval);
        setTime(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime, time]);
  useEffect(() => {
    if (time >= 0) {
      audio.play();
    }
    audio.addEventListener("ended", () => audio.pause());
    return () => {
      audio.removeEventListener("ended",()=>{console.log("ended");});
    };
  });
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
