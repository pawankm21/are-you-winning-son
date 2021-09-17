import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";

const message = [
  "low stress",
  "medium stress",
  "high stress",
  "very high stress",
  "See a doctor",
];

export default function StressSlider() {
  const [msg, setMsg] = useState(message[0]);
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }
  function StressLevel(event) {
    var displayMessage = message[Math.floor(event.target.value / 10)];
    setMsg(displayMessage);
    }

  return (
    <Box component="div" sx={{ height: 300 }}>
      <Tooltip
       
        title={msg}
        followCursor={true}
        sx={{
          fontSize: 10,
        }}
      >
        <Slider
          sx={{
            WebkitAppearance: "slider-vertical",
            width: 100,
            "& .MuiSlider-thumb": {
              borderRadius: "60px 60px 10px 10px ",
              width: 50,
              height: 40,
            },
          }}
          onChange={StressLevel}
          orientation="vertical"
          defaultValue={30}
          max={40}
          min={0}
          aria-label="Temperature"
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Tooltip>
    </Box>
  );
}
