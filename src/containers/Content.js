import React from "react";
import Head from "../components/Head/index.js";
import ContentComponent from "../components/Content/index";
import filters from "../configs/filters-config";
import restaurants from "../configs/restuarants-config";

class Content extends React.Component {
  render() {
    return (
      <>
        <ContentComponent filters={filters} restaurants={restaurants} />
      </>
    );
  }
}
export default Content;
