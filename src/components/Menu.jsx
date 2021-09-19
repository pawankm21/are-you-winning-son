import React, { useEffect, useState } from "react";
import "./css/Menu.css";
const Menu = ({ imgUrl, setImgUrl }) => {
  const [campfire] = useState(new Audio("/sounds/campfire.mp3"));
  const [forest] = useState(new Audio("/sounds/forest.mp3"));
  const [water] = useState(new Audio("/sounds/rowing.mp3"));
  const [train] = useState(new Audio("/sounds/train.mp3"));

  const [cfp, setCfp] = useState(false);
  const [fsp, setFsp] = useState(false);
  const [wtp, setWtp] = useState(false);
  const [tnp, setTnp] = useState(false);

  useEffect(() => {
    cfp ? campfire.play() : campfire.pause();
    fsp ? forest.play() : forest.pause();
    wtp ? water.play() : water.pause();
    tnp ? train.play() : train.pause();

  }, [cfp, fsp, wtp, tnp]);


  const campfirePlay = () => {
    setImgUrl("/images/campfire_vector.jpg");
    setCfp(!cfp);
  };

  const forestPlay = () => {
    setImgUrl("/images/forest_vector.jpg");
    setFsp(!fsp);
  };

  const waterPlay = () => {
    setImgUrl("/images/ocean_vector.jpg");
    setWtp(!wtp);
  };

  const trainPlay = () => {
    setImgUrl("/images/city_vector.jpg");
    setTnp(!tnp);
  };

  return (
    <div className="main">
      <input type="checkbox" id="drop-4" hidden />
      <label className="dropHeader dropHeader-4 " htmlFor="drop-4">
        <i className="fab fa-napster fa-2x"></i>
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
