import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "/", <PieChartOutlined />),
  getItem("News", "news", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="vertical"
          style={{ minHeight: "90vh" }}
          defaultSelectedKeys={["1"]}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      <Link href={child.label}>
                        {child.label} {/* Removed <a> */}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link href={item.key}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </div>
  );
};

export default SiderComponent;
