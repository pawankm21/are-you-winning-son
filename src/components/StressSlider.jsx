import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./css/Range.css"
const marks = {
  10: {
    style: {
      color: "green",
    },
    label: "Low Stress",
  },
  20: {
    style: {
      color: "#D6A01D",
    },
    label: "medium Stress",
  },
  30: {
    style: {
      color: "orange",
    },
    label: "high stress",
  },
  40: {
    style: {
      color: "#7C0A00",
    },
    label: "go see a doctor",
  },
};
export default function StressSlider() {
  const [val, setVal] = useState(10)
  function changeHandler(v)
  {

    if (v <= 10)
    {
      setVal(10);
    }
    else if (v <= 20)
    {
      setVal(20);
    }
    else if (v <= 30)
    {
      setVal(30);
    }
    else if (v <= 40)
    {
      setVal(40);
    }
    console.log(val);
    
  }
  return (
    <div className="range">
      <Slider className="slider" vertical={true} min={0} max={40} marks={marks} step={1} trackStyle={{ background: marks[val].style.color}} onChange={ changeHandler}/>
     <button className="btn btn-lg btn-outline dark"> GO!</button>
    </div>
  );
}
