import React, { useState } from "react";
import logo from "../assets/stake-logo.svg";
import {
  WalletOutlined,
  LineChartOutlined,
  StarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Divider, Avatar, Popover, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;
import "./Sidebar.css";
import styles from "../style";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import propertiesSlice, { propertiesActions } from "../store/propertiesSlice";

// const items = [
//   UploadOutlined, UserOutlined, VideoCameraOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const SidebarLayout = ({ component, selectedKey }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const title = (
    <Link
      to="/profilePage"
      className="flex items-center gap-x-2"
      style={{ fontFamily: "Poppins" }}
    >
      <UserOutlined className="text-xl" />
      <h1 className="text-base font-normal">My Profile</h1>
    </Link>
  );

  const content = (
    <div
      className="flex cursor-pointer"
      onClick={() => {
        dispatch(authActions.removeAuth());
        dispatch(propertiesActions.removeProperties());
        navigate("/");
      }}
    >
      <LogoutOutlined className="text-red-900 text-xl" />
      <h1 className="text-base font-normal">Logout</h1>
    </div>
  );

  const menus = [
    { name: "Properties", icon: WalletOutlined, linkTo: "/homePage" },
    { name: "Wallet", icon: WalletOutlined, linkTo: "/wallet" },
    { name: "Portfolio", icon: LineChartOutlined, linkTo: "/portfolio" },
    { name: "Rewards", icon: StarOutlined },
    // { name: "My cart", icon: ShoppingCartOutlined, linkTo: "/cart" },
  ];

  return (
    <Layout>
      <Sider
        theme="light"
        width={"270px"}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log("broken", broken);
        }}
        onCollapse={toggleSidebar}
        collapsed={!sidebarOpen}
        className={`${sidebarOpen ? " ant-layout-sider-open" : ""}`}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          style={{ fontFamily: "Poppins" }}
        >
          <Menu.Item key={0} style={{ height: "50px", margin: "10px" }}>
            <Link to="/">
              {/* <img src={logo} alt="" /> */}
              <img src="/logo.webp" alt="" className="w-9/12" />
            </Link>
          </Menu.Item>
          <Divider />
          {menus.map((menu, i) => (
            <Menu.Item key={i + 1}>
              <Link
                to={menu?.linkTo}
                key={i}
                className="flex items-center text-lg gap-3.5 font-medium"
              >
                {React.createElement(menu?.icon)}
                <h2 className="whitespace-pre">{menu?.name}</h2>
              </Link>
            </Menu.Item>
          ))}
          <Divider />

          <Menu.Item key={6} style={{ height: "" }}>
            {/* <div className='flex items-center gap-2'>
              <Avatar icon={<UserOutlined />} className={`${styles.flexCenter}`} />
              <h1 className='text-lg font-medium'>Mark</h1>
            </div> */}
            <Popover
              className="flex items-center gap-2"
              placement="right"
              title={title}
              content={content}
              trigger="click"
            >
              <Avatar
                icon={<UserOutlined />}
                className={`${styles.flexCenter}`}
              />
              <h1 className="text-lg font-medium">Mark</h1>
            </Popover>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
          }}
        /> */}

        <Content
          style={{
            margin: "25px 10px 0",
            fontFamily: "Poppins",
          }}
          className={
            sidebarOpen
              ? "translate-x-[90px] md:translate-x-0 overflow-hidden"
              : ""
          }
        >
          <div
            style={{
              // padding: 23,
              minHeight: 360,
            }}
            className={`p-2 md:p-6 lg:p-8 `}
          >
            <div>
              {/* <PropertiesTabs /> */}
              {component}
            </div>
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
