import React, { useEffect } from "react";
import "./css/Menu.css";
const Menu = ({ imgUrl, setImgUrl }) => {
  let campfire = new Audio("/sounds/campfire.mp3");
  let forest = new Audio("/sounds/forest.mp3");
  let water = new Audio("/sounds/rowing.mp3");
  let train = new Audio("/sounds/train.mp3");

  let campfireClickCnt = 0;
  let forestClickCnt = 0;
  let waterClickCnt = 0;
  let trainClickCnt = 0;

  const campfirePlay = () => {
    setImgUrl("https://wallpaperaccess.com/full/174275.jpg");
    console.log(campfireClickCnt);
    if (campfireClickCnt) { campfire.play(); campfireClickCnt = 0; }
    else { campfire.pause(); campfireClickCnt = 1; }
  }

  const forestPlay = () => {
    setImgUrl("https://wallpaperaccess.com/full/174276.jpg");
    if (forestClickCnt) { forest.play(); forestClickCnt = 0; }
    else { forest.pause(); forestClickCnt = 1; }
  }

  const waterPlay = () => {
    setImgUrl("https://wallpaperaccess.com/full/174277.jpg");
    if (waterClickCnt) { water.play(); waterClickCnt = 0; }
    else { water.pause(); waterClickCnt = 1; }
  }

  const trainPlay = () => {
    setImgUrl("https://wallpaperaccess.com/full/174278.jpg");
    if (trainClickCnt) { train.play(); trainClickCnt = 0; }
    else { train.pause(); trainClickCnt = 1; }
  }

  return (
    <div className="main">
      <input type="checkbox" id="drop-4" hidden />
      <label className="dropHeader dropHeader-4 btn-sm " htmlFor="drop-4">
        <i class="fab fa-napster"></i>
      </label>

      <div className="list list-4">
        <div className="item" onClick={forestPlay}>
          <i className="fas fa-tree"></i>Forest
        </div>
        <div className="item" onClick={waterPlay}>
          <i className="fas fa-water"></i>Water
        </div>
        <div className="item" onClick={trainPlay}>
          <i className="fas fa-train"></i>Train
        </div>
        <div className="item" onClick={campfirePlay}>
          <i className="fas fa-fire"></i>Campfire
        </div>
      </div>
    </div>
  );
};
export default Menu;
