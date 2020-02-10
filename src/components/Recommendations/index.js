import React from "react";
import { Row, Col, Card } from "antd";
import HeaderStyle from "./styles.js";
import "antd/dist/antd.css";

export default props => {
  const types = ["type 1", "type 2"];
  const features = ["feature 1", "feature 3"];
  const { restaurants } = props;
  const category1 = restaurants.filter(
    restaurant => types.indexOf(restaurant.information.diningtype) !== -1
  );
  const category2 = restaurants.filter(
    restaurant => features.indexOf(restaurant.typeInformation.featured) !== -1
  );
  console.log(category1, category2);
  const categories = [
    { name: "Featured", data: category2 },
    { name: "Types", data: category1 }
  ];
  return (
    <HeaderStyle>
      <div className="right-content">
        <Row>
          <div className="Maps">Maps</div>
        </Row>
        <Row>
          <div className="subtitle">SPONSORED AND POPULAR</div>
        </Row>
        <Row>
          {categories.map(category => (
            <>
              <Col span={24}>
                <div className="cateory-container">
                  <h2>{category.name}</h2>
                  <div className="card-listings">
                    {category.data.map(data => (
                      <div className="card">
                        <Card
                          cover={
                            <img alt="example" src={data.information.image} />
                          }
                        >
                          <Card.Meta
                            title={data.information.name}
                            description={data.information.address}
                          />
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </HeaderStyle>
  );
};
