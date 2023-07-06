import React, { useState } from "react";
import logo from "../../assets/stake-logo.svg";
import {
  WalletOutlined,
  UserOutlined,
  LogoutOutlined,
  MoneyCollectOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Divider, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;
import "../../components/Sidebar.css";
import styles from "../../style";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

// const items = [
//   UploadOutlined, UserOutlined, VideoCameraOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const SideBar = ({ component, selectedKey }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const menus = [
    { name: "Properties", icon: WalletOutlined, linkTo: "/adminPanel" },
    {
      name: "Money Requests",
      icon: MoneyCollectOutlined,
      linkTo: "/moneyRequests",
    },
    { name: "Users List", icon: UserOutlined, linkTo: "/usersList" },
    { name: "Rent", icon: MoneyCollectOutlined, linkTo: "/rentDetails" },
    { name: "Bank Info", icon: BankOutlined, linkTo: "/bankDetails" },
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
        <div
          key={0}
          style={{ height: "50px", margin: "10px", padding: "10px" }}
        >
          <Link to="/">
            {/* <img src={logo} alt="" /> */}
            <img src="/logo.webp" alt="" className="w-40" />
          </Link>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          style={{ fontFamily: "Poppins", height: "100vh" }}
          onClick={handleMenuClick}
        >
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

          <Menu.Item key={6}>
            <div
              className="flex items-center gap-2"
              onClick={() => {
                dispatch(authActions.removeAuth());
                navigate("/");
              }}
            >
              <Avatar
                icon={<LogoutOutlined />}
                className={`${styles.flexCenter}`}
              />
              <h1 className="text-lg font-medium">Logout</h1>
            </div>
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
            <div>{component}</div>
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

export default SideBar;
