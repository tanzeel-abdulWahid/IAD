import React from "react";
import SideBar from "../../../components/AdminPanelComp/SideBar";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import CustomButton from "../../../components/CustomButton";
import styles from "../../../style";
const AddBank = () => {
  return (
    <>
      <SideBar component={<AddBankForm />} selectedKey="5" />
    </>
  );
};

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddBankForm = () => {
  return (
    <div className="md:w-1/2 m-auto">
      <h1
        className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl mb-8`}
      >
        Add Bank Details
      </h1>

      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 className={`${styles.boldText} mb-2`}>Enter Bank Name</h1>
        <Form.Item
          name="propertyAddress"
          rules={[
            {
              required: true,
              message: "Please input Property Address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h1 className={`${styles.boldText} mb-2`}>Enter Account Number</h1>

        <Form.Item
          name="propertyPrice"
          rules={[
            {
              required: true,
              message: "Please input Property Price",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h1 className={`${styles.boldText} mb-2`}>Enter IBAN Number</h1>

        <Form.Item
          name="propertyStatus"
          rules={[
            {
              required: true,
              message: "Please input Property propertyStatus",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <CustomButton type="button" text="Add Bank" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddBank;
