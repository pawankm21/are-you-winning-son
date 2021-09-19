import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./css/Range.css";
import { Link } from "react-router-dom";
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
export default function StressSlider(props) {
  function changeHandler(v) {
    if (v <= 10) {
      props.setVal(10);
    } else if (v <= 20) {
      props.setVal(20);
    } else if (v <= 30) {
      props.setVal(30);
    } else if (v <= 40) {
      props.setVal(40);
    }
    console.log(props.val);
  }
  return (
    <form>
      <div className="range">
        <Slider
          className="slider"
          vertical={true}
          min={0}
          max={40}
          marks={marks}
          step={1}
          trackStyle={{ background: marks[props.val].style.color }}
          onChange={changeHandler}
        />
      </div>
      <Link to="/tips" className="btn btn-lg btn-danger " id="btn-position">
        Go!!
      </Link>
    </form>
  );
}
