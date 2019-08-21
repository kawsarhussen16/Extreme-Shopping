import React from "react";
import "./preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.js";

const Collections = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()} </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otheritem }) => (
          <CollectionItem key={id} {...otheritem} />
        ))}
    </div>
  </div>
);

export default Collections;
