import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shopSelector";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToprops)(ShopPage);
