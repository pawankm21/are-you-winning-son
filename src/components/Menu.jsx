import React from "react";
import "./css/Menu.css";
const Menu = () => {
  let campfire = new Audio("/sounds/campfire.mp3");
  let forest = new Audio("/sounds/forest.mp3");
  let water = new Audio("/sounds/rowing.mp3");
  let train = new Audio("/sounds/train.mp3");

  const campfirePlay = () => {
    campfire.play();
  };

  const forestPlay = () => {
    forest.play();
  };

  const waterPlay = () => {
    water.play();
  };

  const trainPlay = () => {
    train.play();
  };

  return (
    <div className="main">
      <input type="checkbox" id="drop-4" hidden />
      <label className="dropHeader dropHeader-4 btn-sm " htmlFor="drop-4">
        sounds
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
