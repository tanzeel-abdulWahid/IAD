import React from 'react'
import SideBar from '../../../components/AdminPanelComp/SideBar'
import PurchaseRequestsTab from './PurchaseRequestsTab'

const PurchaseRequests = () => {
  return (
    <>
      <SideBar component={<PurchaseRequestsTab />} selectedKey="2" />
    </>
  )
}

export default PurchaseRequests