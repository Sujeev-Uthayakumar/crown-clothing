import React from "react";

import { HomePageContainer } from "./HomePage.styles.js";

import Directory from "../../components/directory/Directory";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
