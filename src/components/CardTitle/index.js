import React from "react";
import { Row, Col } from "antd";
import CardTitleStyle from "./styles.js";
import "antd/dist/antd.css";

export default props => {
  console.log(props.details);
  const { details } = props;
  return (
    <CardTitleStyle>
      <div className="title-content">
        <Row>
          <Col span={6}>
            <div className="image-section">
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                alt="example"
                src={details.image}
              />
            </div>
          </Col>
          <Col span={14}>
            <div className="sponsored">{details.sponsored && "SPONSORED"}</div>
            <div className="diningtype">{details.diningtype}</div>
            <div className="name">{details.name}</div>
            <div className="location">{details.location}</div>
            <div className="address">{details.address}</div>
          </Col>
          <Col span={4}>
            <div className="rating">{details.rating}</div>
            <div className="diningtype">{details.votes} votes</div>
          </Col>
        </Row>
      </div>
    </CardTitleStyle>
  );
};
