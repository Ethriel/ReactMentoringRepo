import React from "react";
import { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import Routes from "../Routes/routes";
import routes from "../Routes/routes-components";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AppLayout = props => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const VirtualDom = (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <h1 style={{ color: "white", textAlign: "center" }}>React lessons</h1>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={"/lesson1"}>
          {routes.map(r => (
            <Menu.Item key={r.path} icon={<AliwangwangOutlined />}>
              <Link to={r.path}>{r.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "88vh",
          }}
        >
          {<Routes />}
        </Content>
      </Layout>
    </Layout>
  );

  // console.log(VirtualDom);

  return VirtualDom;
};

export default AppLayout;
