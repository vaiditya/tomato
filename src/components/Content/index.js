import React from "react";
import { Row, Col } from "antd";
import ContentStyle from "./styles.js";
import "antd/dist/antd.css";
import SideBar from "../SideBar/index";
import CardListings from "../CardListings/index";
import Recommendations from "../Recommendations/index";
import Head from "../Head/index";

export default props => {
  const { restaurants } = props;
  return (
    <ContentStyle>
      <div className="main-content">
        <Head />
        <div className="content">
          <Row>
            <Col lg={5} md={8}>
              <SideBar filters={props.filters} />
            </Col>
            <Col lg={11} md={16}>
              <CardListings restaurants={restaurants} />
            </Col>
            <Col lg={8} md={16}>
              <Recommendations restaurants={restaurants} />
            </Col>
          </Row>
        </div>
      </div>
    </ContentStyle>
  );
};
