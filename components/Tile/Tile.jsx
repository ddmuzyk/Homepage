import React from "react";
import "./Tile.css";

const Tile = ({title, image}) => {
  return (
    <a className="tile" href="https://www.finder.com.au/">
    <div className="tile-icon-wrapper">
      <img className="tile-icon" src={`../../public/${image}.svg`} alt="Tile Icon"></img>
    </div>
      <div className="tile-title">
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default Tile;