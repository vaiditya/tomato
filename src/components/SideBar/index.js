import React from "react";
import "antd/dist/antd.css";
import SideBarStyle from "./styles.js";
import { Row, Col } from "antd";
import { Checkbox } from "antd";

export default props => {
  const { filters } = props;
  return (
    <SideBarStyle>
      <div>
        <label>
          <h3>Filters</h3>
        </label>
        <div>
          {filters.map(filter => {
            if (filter.order === 0)
              return (
                <div className="checkbox">
                  <Checkbox>{filter.name}</Checkbox>
                </div>
              );
            else
              return (
                <div className="filter-group">
                  <h4>{filter.name}</h4>
                  {filter.items.map(item => (
                    <div className="list-items">
                      {item.name} - <div className="values"></div>
                      {item.value}
                    </div>
                  ))}
                </div>
              );
          })}
        </div>
      </div>
    </SideBarStyle>
  );
};
