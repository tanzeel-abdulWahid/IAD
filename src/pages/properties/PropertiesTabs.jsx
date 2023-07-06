import React, { useState } from "react";
import { Divider, Tabs } from "antd";
import AvailableProperties from "../../components/AvailableProperties";
import styles from "../../style";
import FundedProperties from "../../components/FundedProperties";
const { TabPane } = Tabs;

const PropertiesTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="">
      <h1
        className={`${styles.boldText} text-lightGreen text-center text-3xl `}
      >
        Properties
      </h1>

      <Tabs
        activeKey={activeTab}
        centered
        onChange={handleTabChange}
        defaultChecked="1"
        tabBarGutter={90}
        tabBarStyle={{ marginTop: "40px" }}
        style={{ fontFamily: "Poppins" }}
      >
        <TabPane
          // tab={<span className={`${activeTab === '1' ? 'bg-lightGreen p-2 rounded-xl text-white' : 'text-gray-600'}`}>Tab 1</span>}
          tab="Available"
          key="1"
        >
          <AvailableProperties />
        </TabPane>
        <TabPane
          // tab={<span className={`${activeTab === '2' ? 'bg-lightGreen p-2 rounded-xl text-white' : 'text-gray-600'}`}>Tab 1</span>}
          tab="Funded"
          key="2"
        >
          <FundedProperties />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PropertiesTabs;
