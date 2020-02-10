import React from "react";
import { Row, Col } from "antd";
import HeaderStyle from "./styles.js";
import "antd/dist/antd.css";
import { Input, Select, Icon, Button, Avatar } from "antd";
const { Option } = Select;
const { Search } = Input;

export default () => (
  <HeaderStyle>
    <Row>
      <Col span="24">
        <div className="header">
          <div class="component-list">
            <Row>
              <Col span="3">
                <label className="logo">
                  <em>Tomato</em>
                </label>
              </Col>
              <Col span="4">
                <div className="search-box">
                  <div className="location-icon">
                    <Icon type="environment" theme="filled" />
                  </div>
                  <Select defaultValue="Mumbai">
                    <Option value="mumbai">Mumbai</Option>
                    <Option value="pune">Pune</Option>
                  </Select>
                </div>
              </Col>
              <Col span="8">
                <Search placeholder="Search for restaurants or cusines..." />
              </Col>
              <Col span="4">
                <div className="button-class">
                  <Button ghost>Search</Button>
                </div>
              </Col>
              <Col span={1} />
              <Col span={3}>
                <div className="profile">
                  <div className="badge-icon">
                    <Avatar size="small" icon="user" />
                  </div>
                  <Select className="profile-select" defaultValue="User">
                    <Option value="profile">Profile</Option>
                    <Option value="logout">Logout</Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </HeaderStyle>
);
