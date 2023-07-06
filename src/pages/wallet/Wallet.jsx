import React from 'react'
import SidebarLayout from '../../components/SidebarLayout'
import WalletTab from './WalletTab'

const Wallet = () => {
  return (
    <>
      <SidebarLayout component={<WalletTab />} selectedKey="2"/>
    </>
  )
}

export default Wallet