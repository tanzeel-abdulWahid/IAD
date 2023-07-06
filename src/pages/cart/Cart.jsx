import React from 'react'
import SidebarLayout from '../../components/SidebarLayout'
import CartTab from './CartTab'
const Cart = () => {
    return (
        <>
            <SidebarLayout component={<CartTab />} selectedKey="5"/>
        </>
    )
}

export default Cart