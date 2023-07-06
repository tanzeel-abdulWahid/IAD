import React from 'react'
import { Form, Input } from 'antd';
import SidebarLayout from '../../components/SidebarLayout';
import CustomButton from '../../components/CustomButton';
import styles from '../../style';
const ProfilePageTab = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='md:w-1/2 m-auto h-screen'>
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl mb-8`}>User Details</h1>

            <h1 className={`${styles.boldText} mb-2`}>User Name</h1>

            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="propertyAddress"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Property Address',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <h1 className={`${styles.boldText} mb-2`}>Email Address</h1>


                <Form.Item
                    name="propertyPrice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Property Price',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <h1 className={`${styles.boldText} mb-2`}>Password</h1>

                <Form.Item
                    name="propertyStatus"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Property propertyStatus',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <CustomButton type="button" text="Update Profile" />
                </Form.Item>
            </Form>
        </div>
    )
}




export default ProfilePageTab