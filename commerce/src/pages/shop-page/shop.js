import React from "react";
import CollectionPreview from "../../components/preview-collections/preview-collections.js";
import { selectCollections } from '../../redux/shop/shop.selector.js';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);