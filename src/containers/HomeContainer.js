import React from "react";
import Header from "../components/Header/index.js";
import Content from "../containers/Content";

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}
export default HomeContainer;
