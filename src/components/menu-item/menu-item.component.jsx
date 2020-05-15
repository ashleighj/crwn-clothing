import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size, history, linkUrl }) {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
