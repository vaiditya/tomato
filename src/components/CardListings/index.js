import React from "react";
import { Row, Col, Card, Icon } from "antd";
import CardListingStyle from "./styles.js";
import "antd/dist/antd.css";
import CardTitle from "../CardTitle/index";

export default props => {
  console.log(props.details);
  const { restaurants } = props;
  const gridStyle = {
    width: "100%"
  };
  return (
    <CardListingStyle>
      <div className="card-listings">
        {restaurants.map(restaurant => {
          const { typeInformation } = restaurant;
          return (
            <div className="card">
              <Card
                title={<CardTitle details={restaurant.information} />}
                actions={restaurant.activities.map(activity => {
                  let icon = null;
                  switch (activity.name) {
                    case "Call":
                      icon = "phone";
                      break;
                    case "View Menu":
                      icon = "book";
                      break;
                    case "Order Now":
                      icon = "caret-right";
                      break;
                    case "Book A table":
                      icon = "calendar";
                      break;
                    default:
                      return null;
                  }
                  return (
                    <div
                      className={
                        activity.name === "Order Now" &&
                        activity.valid &&
                        "button-filled"
                      }
                    >
                      <span
                        className={
                          activity.name === "Book A table" && "colored"
                        }
                      >
                        <Icon type={icon} theme="filled" />
                        {activity.name}
                      </span>
                      <div>
                        {activity.name === "Order Now" && !activity.valid && (
                          <div className="small-sized">Currently Offline</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              >
                <Card.Grid hoverable={false} style={gridStyle}>
                  <div className="card-body">
                    <Row>
                      <Col span={6}>CUSINES:</Col>
                      <Col span={18}>
                        {restaurant.typeInformation.cusines.map(
                          (cusine, index) => (
                            <>
                              {cusine}
                              {index < typeInformation.cusines.length - 1 &&
                                ","}
                            </>
                          )
                        )}
                      </Col>
                      <Col span={6}>COST FOR TO:</Col>
                      <Col span={18}>
                        Rs.{restaurant.typeInformation.costForTwo}
                      </Col>
                      <Col span={6}>HOURS:</Col>
                      <Col span={18}>{restaurant.typeInformation.hours}</Col>
                      <Col span={6}>FEATURED IN:</Col>
                      <Col span={18}>{restaurant.typeInformation.featured}</Col>
                    </Row>
                  </div>
                </Card.Grid>
              </Card>
            </div>
          );
        })}
      </div>
    </CardListingStyle>
  );
};
