import React from 'react'
import CustomButton from '../../components/CustomButton'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from '../../style'
import { Divider } from 'antd'
const CartTab = () => {
    return (
        <div className='h-screen lg:h-[39rem]'>
            <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>My Cart</h1>
            <Divider className='border-lightGray' />

            <div className='bg-white p-7 mt-12 md:min-h-[30rem] '>

                <div className='flex justify-center items-center flex-col mt-[10%]'>
                    <ShoppingCartOutlined className="iconStyleLg" />

                    <h1 className='font-normal md:text-lg text-center'>Your cart is empty <br /> Looks like you haven’t added any properties in your cart</h1>
                    <Link to={"/homePage"}>
                        <CustomButton text="View Properties" />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default CartTab