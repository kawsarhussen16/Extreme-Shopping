import React from "react";
import CollectionsOverview from '../../components/collection-overview/collection-overview.js';
import CollectionPage from '../collection/collection.js';

import { Route } from 'react-router-dom';


const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);


export default ShopPage;