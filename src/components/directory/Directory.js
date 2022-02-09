import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directorySelector";

import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToprops)(Directory);
