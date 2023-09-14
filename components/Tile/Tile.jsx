import React from "react";
import "./Tile.css";

const Tile = () => {
  return (
    <a className="tile" href="https://www.finder.com.au/">
    <div className="tile-icon-wrapper">
      <img className="tile-icon" src="../../public/banknote.svg"></img>
    </div>
      <div className="tile-title">
        <h3>Credit Cards</h3>
      </div>
    </a>
  );
};

export default Tile;