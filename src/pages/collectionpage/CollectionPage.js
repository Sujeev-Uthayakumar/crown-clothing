import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelector";

import "./CollectionPage.scss";

const CollectionPage = ({ match, collection }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <h2>CategoryPage</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
