import React from "react";
import { Row } from "antd";
import HeaderStyle from "./styles.js";
import "antd/dist/antd.css";

export default () => (
  <HeaderStyle>
    <div className="content">
      <Row>
        <div className="bread-crumb">Home > India > Mumbai restaurants</div>
      </Row>
      <Row>
        <div className="title">
          <h1>Delivery Restaurants in Mumbai</h1>
        </div>
      </Row>
    </div>
  </HeaderStyle>
);
