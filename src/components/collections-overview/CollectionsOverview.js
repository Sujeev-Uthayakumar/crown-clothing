import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/PreviewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";

import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToprops)(CollectionsOverview);
