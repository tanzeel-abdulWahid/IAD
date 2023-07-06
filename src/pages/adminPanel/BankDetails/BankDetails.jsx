import React from 'react'
import SideBar from '../../../components/AdminPanelComp/SideBar'
import BankDetailsTab from './BankDetailsTab'

const BankDetails = () => {
    return (
        <div>
            <SideBar component={<BankDetailsTab />} selectedKey="5" />

        </div>
    )
}

export default BankDetails