import React, { Component } from "react";
import shopdata from "./shopdata.js";
import CollectionPreview from "../../components/preview-collections/preview-collections.js";
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopdata
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
